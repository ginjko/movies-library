import classes from "./Card.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Card({ id, url, title }) {
  const { movie_id } = useParams();
  return (
    <Link to={`/movie/${id}`} className={classes.card}>
      <img className={classes["card-image"]} src={url} alt="alt" />
      <h3>{title.length > 15 ? title.slice(0, 12) + "..." : title}</h3>
    </Link>
  );
}
