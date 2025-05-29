import { useEffect, useState } from "react";
import { getList, putAvailableBook } from "../src/api/bookApi";

export const useFetch = () => {
  const initState = {
    current: 0,
    dtoList: [],
    next: false,
    nextPage: 0,
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    prevPage: 0,
    totalCount: 0,
    totalPage: 0,
  };

  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleAvailable = (id, curAvailable) => {
    putAvailableBook({ id: id, available: !curAvailable }).then((data) => {
      console.log(data);
    });
  };

  // 전체 리스트
  useEffect(() => {
    getList()
      .then((result) => {
        console.log(result);

        setData(result);

        setLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);

  return { data, loading, error, toggleAvailable };
};
