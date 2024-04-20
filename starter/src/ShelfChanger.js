import React from "react";
import * as BookAPI from "./BooksAPI.js";
const ShelfChanger = ({ book }) => {
  const handleUpdate = (e) => {
    BookAPI.update(book,e.target.value).then()
    console.log(e.target.value)
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleUpdate} >
        <option value="noneChoose" disabled selected>
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