import classes from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (visibility) {
      setTimeout(() => {
        setVisibility(false);
      }, 5000);
    }
  }, [visibility]);

  return (
    <header>
      <h3>
        <Link to={"/"}>Movie Library</Link>
      </h3>
      <button
        onClick={() => setVisibility(!visibility)}
        className={classes["burger-menu"]}
      >
        <span className={classes["burger-line"]}></span>
        <span className={classes["burger-line"]}></span>
        <span className={classes["burger-line"]}></span>
      </button>
      <nav
        className={
          visibility
            ? classes.nav_menu
            : [classes.nav_menu, classes.hidden].join(" ")
        }
      >
        <ul className="nav_list">
          <li className={classes["nav_search"]}>
            <Link to="/search">
              <button className={classes["nav_btn"]}>Search</button>
            </Link>
          </li>
          <li className={classes["nav_profile"]}>
            <button className={classes["nav_btn"]}>Profile</button>
          </li>
          <li className={classes["nav_logout"]}>
            <button className={classes["nav_btn"]}>Logout</button>
          </li>
          <li className={classes["nav_login"]}>
            <Link to="/auth">
              <button className={classes["nav_btn"]}>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
