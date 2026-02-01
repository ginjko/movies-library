import classes from "./MoviePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MoviePage() {
  const { movie_id } = useParams();
  const API_KEY = "VZ42AXD-B8J499Z-HRMEBQA-JR1K1W6";
  const [findedMovie, setFindedMovie] = useState({});

  useEffect(() => {
    async function findMovie() {
      try {
        const response = await axios.get(
          `https://api.poiskkino.dev/v1.4/movie/${movie_id}`,
          { headers: { "X-API-KEY": API_KEY } },
        );
        const data = response.data;
        const parsed = {
          id: data.id,
          name: data.name,
          type: data.type,
          description: data.description,
          releaseYear: data.year,
          ratings: data.rating,
          poster: data.poster.url,
        };
        setFindedMovie(parsed);
      } catch (error) {
        console.log("Error " + error.message);
      }
    }
    findMovie();
  }, []);
  console.log(findedMovie);

  return (
    <div className={classes.container}>
      <img className={classes.movie_poster} src={findedMovie.poster} alt="" />
      <h1>{findedMovie.name}</h1>
      <div className={classes.movie_ratings}>
        <p>
          {"Оценки: "}
          {findedMovie.ratings?.kp ? findedMovie.ratings.kp : "Нет данных"}
        </p>
      </div>
      <h3>Описание</h3>
      <p className={classes.movie_description}>{findedMovie.description}</p>
    </div>
  );
}
