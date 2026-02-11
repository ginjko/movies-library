import classes from "./ProfilePage.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

export default function ProfilePage() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);

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
        <p>id {currentUser.id}</p>
        <p>email: {currentUser.email}</p>
        <p>Date of registration {currentUser["created_at"]}</p>
      </div>
    );
  }
}
