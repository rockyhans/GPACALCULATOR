import React from 'react';

function extraaaaa() {
  return (
    <div className="sgpaCal">
      <div className="mainDiv">
        <h2>
          <u>SGPA CALCULATOR</u>
        </h2>
        <div className="div1">
          <h3>Enter number of Subject:</h3>
          <input
            className="sunNum"
            type="number"
            value={subjectCount}
            onChange={handleSubjectCountChange}
          />
        </div>
        <form onSubmit={handleSgpaSubmit}>
          <div className="inputDiv scrollable-form">
            {generateSubjectInputs()}
          </div>
          <button type="submit" id="submit">
            <div className="sub-text">
              <b> Submit </b>
            </div>
          </button>
        </form>

        {sgpa !== null && (
          <div id="sgpa">
            <h3>
              YOUR SGPA IS &nbsp;{sgpa}&nbsp;, YOUR PERCENTAGE IS &nbsp;
              {percentage}%&nbsp;
            </h3>
            <Link to="/profile"> 
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
        <Link to="/CgpaCal" className="nav-link">
          <div className="bo-text">
            <b> &nbsp; CGPA CALCULATOR &nbsp;</b>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default extraaaaa;
