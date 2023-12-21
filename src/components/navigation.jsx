import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="page-scroll" href="#page-top">
            <img src={require("../assets/images/48858.png")} height={50} />{" "}
          </a>{" "}
        </div>

        <div
          
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className="nav navbar-nav navbar-left"
            style={{ marginLeft: "50px" }}
          >
            <li>
              <a href="#features" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Solutions
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Our Work
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Resources
              </a>
            </li>
            {/* <li>
            <button type="button" class="btn btn-outline-dark">Dark</button>
            </li> */}

            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Tools & Technologies
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            {/* <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
