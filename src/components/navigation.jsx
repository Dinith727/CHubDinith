import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const Navigation = (props) => {
  const [scrolled, setScrolled] = useState(false);

  const h3StyleRegular = {
    fontFamily: "sans-serif",
    fontWeight: 80,
    lineHeight: "34px",
    fontSize: "18px",
    marginLeft: "50px"
  };
  const buttonStyle = {
    marginTop: "5px",
    backgroundColor: "transparent",
    color: scrolled ? "black" : "white",
    border: scrolled ? "2px solid black" : "2px solid white",
    borderRadius: "30px",
    padding: "10px 40px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    float: "inline-end",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (!scrolled) {
          setScrolled(true);
        }
      } else {
        if (scrolled) {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const logoSrc = scrolled ? "/img/48858.png" : "/img/Logo-white.png";

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${
        scrolled ? "solid" : ""
      }`}
    >
      <div
        style={{ marginTop: "20px", marginBottom: "10px" }}
        className="container"
      >
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
            <img src={logoSrc} height={50} />{" "}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className="nav navbar-nav navbar-left"
            // style={{ marginLeft: "50px" }}
            style={h3StyleRegular}
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
          </ul>

          <Button
            style={buttonStyle}
            onMouseEnter={() => setScrolled(true)}
            onMouseLeave={() => setScrolled(false)}
          >
            Talk To an Expert
          </Button>
        </div>
      </div>
    </nav>
  );
};
