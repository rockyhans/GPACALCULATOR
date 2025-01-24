import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Instructions from "./components/Instructions";
import SgpaCal from "./components/SgpaCal";
import CgpaCal from "./components/CgpaCal";
import Home from "./components/Home";
import ReviewForm from "./components/ReviewForm";
import About from "./components/About";
import Login from "./componentsX/Login";
import SGPAForm from "./componentsX/SGPAForm";
import CGPAForm from "./componentsX/CGPAForm";
import SignUp from "./componentsX/SignUp";
import FirstPage from "./componentsX/FirstPage";
import Userdata from "./componentsX/Userdata";

const isGitHubPages = window.location.hostname === "rockyhans.github.io";

const App = () => {
  return (
    <Router basename={isGitHubPages ? "/GPACALCULATOR" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/SgpaCal" element={<SgpaCal />} />
        <Route path="/CgpaCal" element={<CgpaCal />} />
        <Route path="/profile" element={<ReviewForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sgpa" element={<SGPAForm />} />
        <Route path="/cgpa" element={<CGPAForm />} />
        <Route path="/userdata" element={<Userdata />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
