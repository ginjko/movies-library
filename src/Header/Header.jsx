import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <h3>Your Library</h3>
      <nav className={classes["burger-menu"]}>
        <span className={classes["burger-line"]}></span>
        <span className={classes["burger-line"]}></span>
        <span className={classes["burger-line"]}></span>
      </nav>
    </header>
  );
}
