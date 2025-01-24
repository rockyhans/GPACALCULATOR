import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() { 
  return (
    <>
      <div className="mainPage">
        <Navbar />
        <div className="mainPage1">
          <div className="page11">
            <div className="page101">
              <p>
                Read the INSTRUCTIONS to use the application efficiently, Click
                on the below button:{" "}
              </p>
              <Link to="/instructions">
                <button>Instructions</button>
              </Link>
            </div>
            <div className="page101">
              <p>
                Build &nbsp; YOUR PROFILE to save and store your Grade Points,
                Click on the below button:{" "}
              </p>
              <Link to="/profile">
                <button>Your Profile</button>
              </Link>
            </div>
          </div>
          <div className="page12">
            <div className="page101">
              <p>
                Read the Instructions and Calculate SGPA Grade & Persentage,
                Click on the below button:{" "}
              </p>
              <Link to="/SgpaCal">
                <button>SGPA Calculator</button>
              </Link>
            </div>
            <div className="page101">
              <p>
                Read the Instructions and Calculate CGPA Grade & Persentage,
                Click on the below button:{" "}
              </p>
              <Link to="/CgpaCal">
                <button>CGPA Calculator</button>
              </Link>
            </div>
          </div>
          <div className="about">
            <Link to="/about" style={{ border: "none" }}>
              <button>
                {" "}
                Read about the Admin & Connect with us....{" "}
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
