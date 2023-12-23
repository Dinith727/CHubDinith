import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export const Navigation = (props) => {
  const [scrolled, setScrolled] = useState(false);

  const buttonStyle = {
    marginTop: "40px",
    backgroundColor: scrolled ? 'black' : 'transparent',
    color: scrolled ? 'white' : 'black',
    border: '2px solid black',
    borderRadius: '30px',
    padding: '10px 40px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${scrolled ? 'solid' : ''}`}>
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
            <img src="/img/48858.png" height={50} />{" "}
          </a>{" "}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-left" style={{ marginLeft: "50px" }}>
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
            {/* Uncomment the following lines if you want to include the button in the navigation */}
            {/* <li>
              <Button
                style={buttonStyle}
                onMouseEnter={() => setScrolled(true)}
                onMouseLeave={() => setScrolled(false)}
              >
                Learn More
              </Button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
