import "./App.css";
import { useState, useEffect,useCallback  } from "react";
import * as BookAPI from "./BooksAPI.js";
import Search from "./Search.js";
import ListBook from "./ListBook.js";
import { Link , Route, Routes, Router } from "react-router-dom";

function App({fetchBooks,listBook,setListBook}) {


  useEffect(() => {
    BookAPI.getAll().then((res) => {
      setListBook(res);
    });
  },[]);

  return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBook listBook={listBook} fetchBooks={fetchBooks} />
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
  );
}

export default App;
