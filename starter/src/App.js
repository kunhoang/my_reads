import "./App.css";
import { useState, useEffect } from "react";
import * as BookAPI from "./BooksAPI.js";
import Search from "./Search.js";
import ListBook from "./ListBook.js";
import { NavLink } from "react-router-dom";

function App() {

  const [listBook, setListBook] = useState([]);

  useEffect(() => {
    BookAPI.getAll().then((res) => {
      setListBook(res);
    });
  }, []);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ListBook listBook={listBook} />
        <div className="open-search">
          <NavLink to={"/search"}>Add a book</NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
