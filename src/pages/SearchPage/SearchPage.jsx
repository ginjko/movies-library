import classes from "./SearchPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Card/Card.jsx";

export default function SearchPage() {
  //   encodeURIComponent("поттер");
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);
  const API_KEY = "VZ42AXD-B8J499Z-HRMEBQA-JR1K1W6";

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchMovie(searchQuery);
    }
  };

  async function searchMovie(query) {
    try {
      const encodedQuery = encodeURIComponent(query);
      const response = await axios.get(
        `https://api.poiskkino.dev/v1.4/movie/search?page=1&limit=1&query=${encodedQuery}`,
        { headers: { "X-API-KEY": API_KEY } },
      );
      const parsed = response.data.docs.map((el) => ({
        id: el.id,
        name: el.name,
        poster: el.poster?.url,
        rating: el.rating?.imdb,
      }));
      // console.log(response);
      setMovie(parsed);
      console.log(movie);
    } catch (error) {
      console.error("Ошибка запроса:", error.response?.data || error.message);
    }
  }

  return (
    <div className={classes.container}>
      <form className={classes.search_form}>
        <input
          type="text"
          placeholder="Type movie"
          value={searchQuery}
          className={classes.search_input}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </form>
      <h3>Search results:</h3>
      <div className={classes.results_block}>
        {movie.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            url={
              el.poster
                ? el.poster
                : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLDP5s2j9u1x86fOb7kNKXanJeMn8zZ30ZQ&s`
            }
            title={el.name ? el.name : "title name"}
          ></Card>
        ))}
      </div>
    </div>
  );
}
