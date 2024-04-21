import App from "./App";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import * as BookAPI from "./BooksAPI.js";

function Home() {
  const [listBook, setListBook] = useState([]);
  const fetchBooks = useCallback(() => {
    BookAPI.getAll().then((res) => {
      setListBook(res);
    });
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <App
            fetchBooks={fetchBooks}
            listBook={listBook}
            setListBook={setListBook}
          />
        }
      ></Route>
      <Route
        path="/search"
        element={<Search fetchBooks={fetchBooks} />}
      ></Route>
    </Routes>
  );
}

export default Home;
