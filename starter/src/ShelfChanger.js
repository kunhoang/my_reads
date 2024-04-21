import React from "react";
import * as BookAPI from "./BooksAPI.js";
const ShelfChanger = ({ book,setSearchResult }) => {
  const handleUpdate = (e) => {
    BookAPI.update(book,e.target.value).then(
      BookAPI.getAll().then((res) => {
        setSearchResult(res);
      })
    )
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