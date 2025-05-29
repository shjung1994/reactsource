import React from "react";
import BookForm from "../components/BookForm";
import { useNavigate } from "react-router-dom";
import { postBook } from './../api/bookApi';

const AddBook = () => {

  const navigate = useNavigate();

  const onSubmit = (bookData) => {
    postBook(bookData).then((data) => {
      console.log("도서 추가", data);
      navigate("/");
    });
  };

  return (
    <div>
      <h1 className="text-[32px]">Add a New Book</h1>
      <BookForm onSubmit={onSubmit}/>
    </div>
  );
};

export default AddBook;
