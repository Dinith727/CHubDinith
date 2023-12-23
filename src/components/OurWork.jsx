import React from "react";
import { Row, Col } from "react-bootstrap";

export const OurWork = () => {
  const row = {
    marginTop: "100px",
    marginBottom: "100px",
  };

  const h1StyleRegular = {
    fontFamily: "sans-serif",
    fontSize: "48px",
    fontWeight: 400,
    lineHeight: "64px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "0",
    color: "black",
  };

  const boldWordStyle = {
    fontFamily: "sans-serif",
    fontSize: "16px",
    fontWeight: "304",
    textAlign: "left",
    color: "black",
  };


  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    marginTop: "10px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "filter 0.3s ease-in-out, margin 0.3s ease-in-out", // Add margin transition
  };

  const overlayStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    fontSize: "1.5rem",
    width: "100%",
    padding: "10px", // Adjust padding as needed
    background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)", // Use a gradient for a smooth transition
    color: "white",
    opacity: "0",
    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out", // Add transform transition
    transform: "translateY(100%)", // Initial position below the container
    textAlign: "left",
  };

  return (
    <div style={row} className="container">
      <Row>
        <Col md={11}>
          <h3 style={boldWordStyle}>OUR WORK</h3>
          <h1 style={h1StyleRegular}>
            vital component of global transportation, connecting people and
            goods
            {/* {" "}
              <span style={boldWordStyle}>embedded finance engine</span> */}
          </h1>
        </Col>
      </Row>
      <Row>
      <Col style={containerStyle} md={3}>
        <div
          style={containerStyle}
          onMouseOver={(e) => {
            e.currentTarget.querySelector(".overlay").style.opacity = "1";
            e.currentTarget.querySelector(".overlay").style.transform = "translateY(0)";
            e.currentTarget.querySelector(".img-responsive").style.filter =
              "brightness(0.7)";
            e.currentTarget.querySelector(".img-responsive").style.marginBottom = "-10px"; // Adjust margin for flush transition
          }}
          onMouseOut={(e) => {
            e.currentTarget.querySelector(".overlay").style.opacity = "0";
            e.currentTarget.querySelector(".overlay").style.transform = "translateY(100%)";
            e.currentTarget.querySelector(".img-responsive").style.filter =
              "brightness(1)";
            e.currentTarget.querySelector(".img-responsive").style.marginBottom = "0";
          }}
        >
          <img src="img/CasestudyCard.png" className="img-responsive" style={imageStyle} alt="" />
          <div style={overlayStyle} className="overlay">
            <p style={{marginLeft:"6%"}}>Consent Directive for provincial Integrated Client Management Sysytem</p>
          </div>
        </div>
      </Col>
      <Col style={containerStyle} md={3}>
        <div
          style={containerStyle}
          onMouseOver={(e) => {
            e.currentTarget.querySelector(".overlay").style.opacity = "1";
            e.currentTarget.querySelector(".overlay").style.transform = "translateY(0)";
            e.currentTarget.querySelector(".img-responsive").style.filter =
              "brightness(0.7)";
            e.currentTarget.querySelector(".img-responsive").style.marginBottom = "-10px"; // Adjust margin for flush transition
          }}
          onMouseOut={(e) => {
            e.currentTarget.querySelector(".overlay").style.opacity = "0";
            e.currentTarget.querySelector(".overlay").style.transform = "translateY(100%)";
            e.currentTarget.querySelector(".img-responsive").style.filter =
              "brightness(1)";
            e.currentTarget.querySelector(".img-responsive").style.marginBottom = "0";
          }}
        >
          <img src="img/CasestudyCard2.png" className="img-responsive" style={imageStyle} alt="" />
          <div style={overlayStyle} className="overlay">
            <p style={{marginLeft:"6%"}}>Consent Directive for provincial Integrated Client Management Sysytem</p>
          </div>
        </div>
      </Col>
      <Col style={containerStyle} md={3}>
        <div
          style={containerStyle}
          onMouseOver={(e) => {
            e.currentTarget.querySelector(".overlay").style.opacity = "1";
            e.currentTarget.querySelector(".overlay").style.transform = "translateY(0)";
            e.currentTarget.querySelector(".img-responsive").style.filter =
              "brightness(0.7)";
            e.currentTarget.querySelector(".img-responsive").style.marginBottom = "-10px"; // Adjust margin for flush transition
          }}
          onMouseOut={(e) => {
            e.currentTarget.querySelector(".overlay").style.opacity = "0";
            e.currentTarget.querySelector(".overlay").style.transform = "translateY(100%)";
            e.currentTarget.querySelector(".img-responsive").style.filter =
              "brightness(1)";
            e.currentTarget.querySelector(".img-responsive").style.marginBottom = "0";
          }}
        >
          <img src="img/CasestudyCard3.png" className="img-responsive" style={imageStyle} alt="" />
          <div style={overlayStyle} className="overlay">
            <p style={{marginLeft:"6%"}}>Consent Directive for provincial Integrated Client Management Sysytem</p>
          </div>
        </div>
      </Col>

      <Col style={containerStyle} md={3}>
        <div
          style={containerStyle}
          onMouseOver={(e) => {
            e.currentTarget.querySelector(".overlay").style.opacity = "1";
            e.currentTarget.querySelector(".overlay").style.transform = "translateY(0)";
            e.currentTarget.querySelector(".img-responsive").style.filter =
              "brightness(0.7)";
            e.currentTarget.querySelector(".img-responsive").style.marginBottom = "-10px"; // Adjust margin for flush transition
          }}
          onMouseOut={(e) => {
            e.currentTarget.querySelector(".overlay").style.opacity = "0";
            e.currentTarget.querySelector(".overlay").style.transform = "translateY(100%)";
            e.currentTarget.querySelector(".img-responsive").style.filter =
              "brightness(1)";
            e.currentTarget.querySelector(".img-responsive").style.marginBottom = "0";
          }}
        >
          <img src="img/CasestudyCard4.png" className="img-responsive" style={imageStyle} alt="" />
          <div style={overlayStyle} className="overlay">
            <p style={{marginLeft:"6%"}}>Consent Directive for provincial Integrated Client Management Sysytem</p>
          </div>
        </div>
      </Col>
      {/* Repeat the above structure for other images */}
    </Row>
    </div>
  );
};
