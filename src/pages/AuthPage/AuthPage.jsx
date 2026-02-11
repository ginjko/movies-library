import { useContext, useState, useEffect } from "react";
import classes from "./AuthPage.module.css";
import supabase from "../../../utils/supabase";
import { AuthContext } from "../../store/AuthContext.jsx";

export default function AuthPage() {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [message, setMessage] = useState();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [auth, setAuth] = useState("login");
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleSumbitRegister = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: regEmail,
      password: regPassword,
      options: {
        name: regName,
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("User account created");
    }

    console.log(error);
    console.log(message);
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("Succesfuly login");
      console.log("Succesfuly login");
      // localStorage.setItem("currentUser", JSON.stringify(data));
      setCurrentUser(data.user);
      console.log(currentUser);
    }

    console.log(error);
    // console.log(message);
    // console.log(data);
  };

  // начало jsx //

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className={classes.container}>
        <div className={classes["auth-choice"]}>
          <button
            onClick={() => setAuth("register")}
            className={
              auth === "register"
                ? `${classes["auth-choice_btn"]} ${classes["active_btn"]}`
                : classes["auth-choice_btn"]
            }
          >
            Register
          </button>
          <button
            onClick={() => setAuth("login")}
            className={
              auth === "login"
                ? `${classes["auth-choice_btn"]} ${classes["active_btn"]}`
                : classes["auth-choice_btn"]
            }
          >
            Login
          </button>
        </div>
        <div
          className={
            auth === "register" ? [classes.auth, classes.active] : classes.auth
          }
        >
          <form
            className={classes["auth-form"]}
            onSubmit={(e) => handleSumbitRegister(e)}
          >
            <input
              className={classes["auth-input"]}
              type="text"
              value={regName}
              onChange={(e) => {
                setRegName(e.target.value);
                console.log(regName);
              }}
              placeholder="your name"
            />
            <input
              className={classes["auth-input"]}
              type="email"
              value={regEmail}
              onChange={(e) => {
                setRegEmail(e.target.value);
                console.log(regEmail);
              }}
              placeholder="example@gmail.com"
            />
            <input
              className={classes["auth-input"]}
              required
              type="password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              placeholder="your password"
            />

            <button className={classes["submit_btn"]} type="submit">
              Register!
            </button>
          </form>
        </div>
        <div
          className={
            auth === "login" ? [classes.auth, classes.active] : classes.auth
          }
        >
          <form
            className={classes["auth-form"]}
            onSubmit={(e) => handleSubmitLogin(e)}
          >
            <input
              className={classes["auth-input"]}
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="example@gmail.com"
            />
            <input
              className={classes["auth-input"]}
              required
              type="password"
              value={loginPassword}
              placeholder="your password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className={classes["submit_btn"]} type="submit">
              Login!
            </button>
          </form>
        </div>
        {/* {message && <>{message}</>} */}
      </div>
    </AuthContext.Provider>
  );
}
