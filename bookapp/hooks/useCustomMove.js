// 페이지 나누기 이동

import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const useCustomMove = () => {
  // <Link to={{}}/>와 같은 역할
  const navigate = useNavigate();
  // 쿼리스트링 가져오기
  const [queryParams] = useSearchParams();

  // ?page=1&size=10&keyword= 가져오기
  const page = queryParams.get("page", 1);
  const size = queryParams.get("size", 10);
  const genre = queryParams.get("genre", 0);
  const keyword = queryParams.get("keyword", "");

  const queryDefault = createSearchParams({ page, size, genre, keyword }).toString();

  // ?page=10&size=10&genre=&keyword
  // moveToList({page:1, size:20, genre:1, keyword:'자바'})

  const moveToList = (pageParam) => {
    let queryStr: "";

    if (pageParam) {
      const page = pageParam.get("page", 1);
      const size = pageParam.get("size", 10);
      const genre = pageParam.get("genre", 0);
      const keyword = pageParam.get("keyword", "");

      queryStr = createSearchParams({ page, size, genre, keyword }).toString();
    } else {
      queryStr = queryDefault;
    }
  };

  const moveToDetail = (id) => {
    navigate({
      pathname: `/books/${id}`,
      search: queryDefault,
    });
  };

  const moveToEdit = (id) => {
    navigate({
      pathname: `/edit/${id}`,
      search: queryDefault,
    });
  };
  return { moveToList, moveToDetail, moveToEdit, page, size, genre, keyword };
};

export default useCustomMove;
