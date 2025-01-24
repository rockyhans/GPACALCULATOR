import React, { useState } from "react";
import { Link } from "react-router-dom";
import SGPAForm from "./SGPAForm";
import CGPAForm from "./CGPAForm";
import "./homeX.css";

function Userdata() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <div className="mainPageX">
        <h2>
          <u>Save Your Result:</u>
        </h2>
        <div className="signUp">
          <p>Save Your SGPA Result:</p>
          <button
            onClick={() => setShowSignup(!showSignup)}
            className="special"
          >
            {showSignup ? "Click BTN" : "For SGPA"}
          </button>

          {showSignup && (
            <div className="signUpForm">
              <SGPAForm />
            </div>
          )}
        </div>

        <div className="login">
          <p>Save Your CGPA Result:</p>
          <button onClick={() => setShowLogin(!showLogin)} className="special">
            {showSignup ? "Click BTN" : "For CGPA"}
          </button>

          {showLogin && (
            <div className="loginForm">
              <CGPAForm />
            </div>
          )}
        </div>
        <div className="navigation">
          <Link to="/" className="nav-link">
            <div className="bo-text">
              <b> &nbsp; HOME &nbsp;</b>
            </div>
          </Link>
          <Link to="/SgpaCal" className="nav-link">
            <div className="bo-text">
              <b> &nbsp; SGPA CALCULATOR &nbsp;</b>
            </div>
          </Link>
          <Link to="/CgpaCal" className="nav-link">
            <div className="bo-text">
              <b> &nbsp; CGPA CALCULATOR &nbsp;</b>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Userdata;
