import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./SignUp";
import LoginForm from "./Login";
import "./homeX.css";

function FirstPage() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="mainPageX">
      <h2>
        <u>Build Your Profile:</u>
      </h2>
      <div className="signUp">
        <p>Signup with your User Name, Email, and Password:</p>
        <button onClick={() => setShowSignup(!showSignup)} className="special">
          {showSignup ? "Click Submit" : "Signup Here"}
        </button>

        {showSignup && (
          <div className="signUpForm">
            <Signup />
          </div>
        )}
      </div>

      <div className="login">
        <p>Login with your valid credential Email, and Password:</p>
        <button onClick={() => setShowLogin(!showLogin)} className="special">
          {showSignup ? "Click Submit" : "Login Here"}
        </button>

        {showLogin && (
          <div className="loginForm">
            <LoginForm />
          </div>
        )}
        <Link to="/home">
          <button className="homeBtn"> Go Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default FirstPage;
