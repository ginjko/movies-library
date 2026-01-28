import "./App.css";
import Header from "./Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route, BrowserRouter } from "react-router";
import MoviePage from "./pages/MoviePage/MoviePage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
