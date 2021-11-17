import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="../GAMAZON.gif" alt="" />
      </Link>

      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <h5>Password Confirmation</h5>
          <input type="text" />

          <button>Sign In</button>
        </form>

        <p>By signing</p>
      </div>
    </div>
  );
}

export default Login;
