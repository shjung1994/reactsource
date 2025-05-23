import React from "react";
import { useFetch } from "./hooks/useFetch";

const BookList = () => {

  const {data, error, loading} = useFetch("http://localhost:8080/books");

  return (
    <div>
      <h2>Book List</h2>
      {loading ? (<p>Loading...</p>) : error ? (<p>error : {error}</p>) : 
      (<ul>
        {data.map((book) => (
          <li key={book.code}>{book.title}</li>
        ))}
      </ul>)}
    </div>
  );
};

export default BookList;
