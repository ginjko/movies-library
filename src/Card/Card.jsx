import classes from "./Card.module.css";

export default function Card({ url, title }) {
  return (
    <a href="#" className={classes.card}>
      <img className={classes["card-image"]} src={url} alt="alt" />
      <h3>{title.length > 15 ? title.slice(0, 12) + "..." : title}</h3>
    </a>
  );
}
