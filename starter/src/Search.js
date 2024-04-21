import "./main.css";
import * as BookAPI from "./BooksAPI.js";
import { useState, useEffect } from "react";
import ShelfChanger from "./ShelfChanger.js";
import { NavLink } from "react-router-dom";

const Search = ({fetchBooks}) => {
  const [keySearch, setKeySearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [listBook, setListBook] = useState([]);

  useEffect(() => {
    BookAPI.getAll().then((res) => {
      setListBook(res);
    });
  }, []);

  const handleKeySearch = (e) => {
    const searchTerm = e.target.value.trim();
    if (searchTerm === "") {
      setSearchResult([]);
    } else {
      setKeySearch(searchTerm);
      BookAPI.search(searchTerm).then((res) => {
        if (res.error === "empty query") {
          setSearchResult([]);
        } else {
          // Filter out books already in listBook
          const filteredResult = res.filter((book) => {
            return !listBook.find(
              (listBookBook) => listBookBook.id === book.id
            );
          });
          setSearchResult(filteredResult);
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
                  <ShelfChanger book={book} setSearchResult={setSearchResult} fetchBooks={fetchBooks} />
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
