import "./main.css";
import * as BookAPI from "./BooksAPI.js";
import { useState } from "react";
import ShelfChanger from "./ShelfChanger.js";
import { NavLink } from "react-router-dom";
const Search = () => {
  const [keySearch, setKeySearch] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const handleKeySearch = (e) => {
    if (e.target.value === "") {
      setSearchResult([]);
    } else {
      setKeySearch(e.target.value)
      BookAPI.search(e.target.value).then((res) => {
        if (res.error === "empty query") {
          setSearchResult([]);
        } else {
          setSearchResult(res);
        }
      });
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <NavLink to={"/"} className="close-search">
          Close
        </NavLink>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleKeySearch}
          />
        </div>
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
                      backgroundImage: `url(${
                        book.imageLinks
                          ? book.imageLinks.smallThumbnail
                          : "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
                      })`,
                    }}
                  ></div>
                  <ShelfChanger book={book} setSearchResult={setSearchResult} />
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
