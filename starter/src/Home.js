import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}

export default Home;
