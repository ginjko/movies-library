import "./App.css";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route, BrowserRouter } from "react-router";
import MoviePage from "./pages/MoviePage/MoviePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import AuthProvider from "./store/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/movie/:movie_id"
            element={<MoviePage></MoviePage>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
