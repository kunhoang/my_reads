import React from "react";
import * as BookAPI from "./BooksAPI.js";
import { useLocation } from 'react-router-dom';

const ShelfChanger = ({ book, fetchBooks }) => {
  const location = useLocation();
  const activeLink = location.pathname;
  
  const handleUpdate = (e) => {
    BookAPI.update(book, e.target.value).then(() => {
      if (activeLink === '/search' || activeLink === '/') {
        fetchBooks();
      }
    });
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleUpdate} value={book.shelf} >
        <option value="noneChoose" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;