import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./SignUp.css";
import "./Login.css";
import { auth } from "./firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  const handleSignUp = (event) => {
    event.preventDefault();

    if (password === passwordConfirmation){
      auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        history.push("/");
      }).catch(error => alert(error.message));
    } else {
      alert("Your password DO NOT match!");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="../GAMAZON.gif" alt="" />
      </Link>

      <div className="login-container">
        <h1>Create Account</h1>
        <form>
          <h5>E-mail</h5>
          <input onChange={event => setEmail(event.target.value)} value={email} type="email" />
          <h5>Password</h5>
          <input onChange={event => setPassword(event.target.value)} value={password} type="password" />
          <h5>Re-enter Password</h5>
          <input onChange={event => setPasswordConfirmation(event.target.value)} value={passwordConfirmation} type="password" />

          <button onClick={handleSignUp} className="login-signUpBtn">Create your GAmazon account</button>
        </form>

        <p>By creating an account you agree to GAmazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
      </div>
    </div>
  );
}

export default SignUp;
