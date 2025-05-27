import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Error from "./components/Error";
import Layout from './components/Layout';
import AddBook from "./pages/AddBook";

// /5173 => Home
// /5173/add => AddBook
// /5173/edit/1 => EditBook
// /5173/books/1 => BookDetails
// 잘못된경로 => Error

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
