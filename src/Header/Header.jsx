import classes from "./Header.module.css";
import { useState, useRef } from "react";

export default function Header() {
  const [visibility, setVisibility] = useState(false);

  return (
    <header>
      <h3>Your Library</h3>
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
            <button className={classes["nav_btn"]}>Search</button>
          </li>
          <li className={classes["nav_profile"]}>
            <button className={classes["nav_btn"]}>Profile</button>
          </li>
          <li className={classes["nav_logout"]}>
            <button className={classes["nav_btn"]}>Logout</button>
          </li>
          <li className={classes["nav_login"]}>
            <button className={classes["nav_btn"]}>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
