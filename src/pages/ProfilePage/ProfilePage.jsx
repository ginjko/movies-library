import classes from "./ProfilePage.module.css";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return (
      <div className={classes.container}>
        <Link to="/auth">
          <h3>Login in our account</h3>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <h3>Your profile</h3>
        <p>email: {currentUser.user.email}</p>
        <p>Date of registration {currentUser.user["created_at"]}</p>
      </div>
    );
  }
}
