import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./cgpaCal.css"; // CgpaCal CSS file
import "./sgpaCal.css";

function CgpaCal() {
  const [semesterCount, setSemesterCount] = useState(0);
  const [semesters, setSemesters] = useState([]);
  const [cgpa, setCgpa] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const handleSemesterCountChange = (e) => {
    setSemesterCount(parseInt(e.target.value, 10) || 0);
    setSemesters(
      new Array(parseInt(e.target.value, 10) || 0).fill({
        sgpa: "",
        credits: 0,
      })
    );
  };

  const handleSemesterChange = (index, field, value) => {
    const newSemesters = [...semesters];
    newSemesters[index] = { ...newSemesters[index], [field]: value };
    setSemesters(newSemesters);
  };

  const generateSemesterInputs = () => {
    return semesters.map((semester, index) => (
      <>
      <div key={index} className="inputbox inputboxCgpa">
        <div  className="inputboxSgpa1">
        <input
          className="Inp"
          type="number"         
          placeholder="Semester Num"
        />
        </div>
        <div className="inputboxSgpa2">
        <input
          className="Inp"
          type="number"
          name={`sgpa-${index}`}
          value={semester.sgpa}
          onChange={(e) =>
            handleSemesterChange(index, "sgpa", parseFloat(e.target.value) || 0)
          }
          placeholder=" Sem SGPA"
        />
        <input
          className="Inp"
          type="number"
          name={`credits-${index}`}
          value={semester.credits !== 0 ? semester.credits : ""}
          onChange={(e) =>
            handleSemesterChange(
              index,
              "credits",
              parseFloat(e.target.value) || 0
            )
          }
          placeholder="Credits"
        />
        </div>
        
      </div>
      </>
    ));
  };

  const handleCgpaSubmit = (e) => {
    e.preventDefault();
    let totalWeightedSgpa = 0;
    let totalCredits = 0;

    semesters.forEach(({ sgpa, credits }) => {
      totalWeightedSgpa += sgpa * credits;
      totalCredits += credits;
    });

    const calculatedCgpa = totalCredits
      ? (totalWeightedSgpa / totalCredits).toFixed(2)
      : 0;
    setCgpa(calculatedCgpa);

    let calculatedPercentage = (calculatedCgpa * 10 - 7.5).toFixed(2);
    if (calculatedPercentage === "-7.50") {
      calculatedPercentage = 0;
    }
    setPercentage(calculatedPercentage);
  };

  return (
    <div className="sgpaCal">
      <div className="mainDiv">
        <h2>
          <u>CGPA CALCULATOR</u>
        </h2>

        <div className="div1">
          <h3>Number of Semester:</h3>
          <input
            className="sunNum"
            type="number"
            value={semesterCount}
            onChange={handleSemesterCountChange}
          />
        </div>

        <form onSubmit={handleCgpaSubmit}>
          <div className="inputDiv scrollable-form">
            {generateSemesterInputs()}
          </div>
          <button type="submit" id="submit">
            <div className="sub-text">
              <b> Submit </b>
            </div>
          </button>
        </form>

        {cgpa !== null && (
          <div id="sgpa">
            <h3>
              &nbsp; YOUR CGPA IS &nbsp;
              {cgpa} &nbsp;, YOUR PERCENTAGE IS &nbsp;
              {percentage}%
            </h3>
            <Link to="/fibe">
              <button className="saveBtn">
                <div className="sub-text">
                  <b> Save </b>
                </div>
              </button>
            </Link>
          </div>
        )}
      </div>

      <div
        className="navigation"
        style={{ paddingBottom: "15px", paddingTop: "15px", margin: "0px" }}
      >
        <Link to="/" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; HOME &nbsp;</b>
          </div>
        </Link>
        <Link to="/instructions" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; INSTRUCTIONS &nbsp;</b>
          </div>
        </Link>
        <Link to="/SgpaCal" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; SGPA CALCULATOR &nbsp;</b>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CgpaCal;
