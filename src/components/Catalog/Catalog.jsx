import classes from "./Catalog.module.css";
import Card from "../Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Catalog() {
  const [movies, setMovies] = useState([]);
  const API_KEY = "VZ42AXD-B8J499Z-HRMEBQA-JR1K1W6";

  useEffect(() => {
    async function searchMovies() {
      try {
        const response = await axios.get(
          "https://api.poiskkino.dev/v1.4/movie?page=1&limit=18&type=tv-series&type=cartoon&type=animated-series&type=anime&status=completed&year=2010-2026",
          { headers: { "X-API-KEY": API_KEY } },
        );
        const parsed = response.data.docs.map((el) => ({
          id: el.id,
          name: el.name,
          poster: el.poster?.url,
        }));
        console.log(parsed);
        setMovies(parsed);
      } catch (error) {
        console.error("Ошибка запроса:", error.response?.data || error.message);
      }
    }
    searchMovies();
  }, []);

  return (
    <div className={classes.catalog}>
      {movies.map((el) => (
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
  );
}
