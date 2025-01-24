import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import img from "./image.jpg";

function About() {
  return ( 
    <div className="aboutPage">
      <div className="aboutContainer">
        <img src={img} alt="Profile" className="profileImage" />
        <p className="aboutDescription">
          Hi, I am <span className="highlight">Danish Rizwan</span>, a
          passionate developer with expertise in building interactive and
          responsive web applications. I thrive on solving complex problems and
          transforming innovative ideas into impactful solutions. My journey in
          development is fueled by a deep curiosity for technology and a
          commitment to delivering user-friendly experiences. When I’m not
          coding, I enjoy learning about the latest tech trends, collaborating
          with like-minded individuals, and sharing knowledge with the developer
          community. Let’s connect and create something amazing together!
        </p>

        <div className="contactLinks">
          <a
            href="https://github.com/rockyhans"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/danish-rizwan-87b2552b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
          >
            LinkedIn
          </a>
          <a href="mailto:rdanishrizwan@gmail.com" className="contactLink">
            Email
          </a>
        </div>
        <Link to="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
