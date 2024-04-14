import "./App.css";
import { useState, useEffect } from "react";
import * as BookAPI from "./BooksAPI.js";
import Search from "./Search.js";
import ListBook from "./ListBook.js";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [keySearch, setKeySearch] = useState("");

  const [listBook, setListBook] = useState([]);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    BookAPI.getAll().then((res) => {
      setListBook(res);
    });
  }, [reload]);

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
          setKeySearch={setKeySearch}
          keySearch={keySearch}
          reload={reload}
          setReload={setReload}
        />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBook listBook={listBook} reload={reload} setReload={setReload} />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
