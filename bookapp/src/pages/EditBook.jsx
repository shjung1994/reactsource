import React, { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import { getBook, putBook } from "../api/bookApi";
import { useParams } from "react-router-dom";
import Loading from './../components/Loading';

const EditBook = () => {
// id 가져오기 http://localhost:5173/edit/10238
// 주소줄에 있는거 가져오기 : useParams
const {id} = useParams();

  const [book, setBook] = useState(null)

  useEffect(() => {
    getBook(id).then(data => {
      console.log("도착 ",data) 
      setBook(data);
    });
  },[id]);

  if (!book) return <Loading/>;

  const onSubmit = (bookData) => {
    putBook(bookData).then(data => {
      console.log('날짜 수정', data);
    });
  };

  return (
    <div>
      <h1 className="text-[32px]">Edit Book</h1>
      <BookForm initialData={book} onSubmit={onSubmit}/>
    </div>
  );
};

export default EditBook;
