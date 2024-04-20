import "./main.css";
import * as BookAPI from "./BooksAPI.js";
import { useState } from "react";
import ShelfChanger from "./ShelfChanger.js";
import { NavLink } from "react-router-dom";
const Search = () => {
  const [keySearch, setKeySearch] = useState("");
  
  const [searchResult, setSearchResult] = useState([]);

  const handleKeySearch = (e) => {
    setKeySearch(e.target.value);
  };

  const handleListBook = () => {
    BookAPI.search(keySearch).then((res) => {
      console.log(res)
      if(res.error === 'empty query'){
        setSearchResult([]);
      }else{
        setSearchResult(res);
      }
      
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
      <NavLink to={"/"} className='close-search'>Close</NavLink>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleKeySearch}
          />
        </div>
        <button className="btn-search" onClick={handleListBook}>
          Search
        </button>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResult.map((book, index) => (
            <li key={index}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                    }}
                  ></div>
                  <ShelfChanger book={book}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
