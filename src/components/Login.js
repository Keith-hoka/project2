import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const handleSignIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");

    }).catch(error => alert(error.message));

  };

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });

        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="../GAMAZON.gif" alt="" />
      </Link>

      <div className="login-container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input onChange={event => setEmail(event.target.value)} value={email} type="email" />
          <h5>Password</h5>
          <input onChange={event => setPassword(event.target.value)} value={password} type="password" />

          <button onClick={handleSignIn} type="submit" className="login-signInBtn">Sign-In</button>
          <Button className="login-signInBtn" onClick={signIn}>
            <img className="login-googleLogo" src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" />
            Sign-In With Google
          </Button>
        </form>

        <p>By signing-in you agree to GAmazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        <p className="login-newUser">New to GAmazon?</p>
        <Link to="/signup">
          <button className="login-signUpBtn1">Create your GAmazon account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
