import "./App.css";
import Header from "./Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route, BrowserRouter } from "react-router";
import MoviePage from "./pages/MoviePage/MoviePage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/movie/:movie_id"
          element={<MoviePage></MoviePage>}
        ></Route>
        <Route path="/search" element={<SearchPage></SearchPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
