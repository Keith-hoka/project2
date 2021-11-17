import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");

    }).catch(error => alert(error.message));

  };

  const handleSignUp = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");

    }).catch(error => alert(error.message));
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
        </form>

        <p>By signing-in you agree to GAmazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        <button onClick={handleSignUp} className="login-signUpBtn">Create your GAmazon account</button>
      </div>
    </div>
  );
}

export default Login;
