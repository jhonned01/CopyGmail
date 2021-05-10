import React from "react";
import { auth, Provider } from "../firebase";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { login } from "../features/counter/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(Provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.blogs.es/16b956/gmail-nuevo-logo-google-workspace/1366_2000.jpg"
          alt="logo"
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
