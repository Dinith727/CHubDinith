import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const Gallery2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const footerStyle = {
    backgroundColor: "#f8f9fa", // Set the background color as needed
    padding: "20px 0", // Adjust the padding as needed
    textAlign: "center",
  };


  const row = {
    marginTop: "100px",
    marginBottom: "100px",
  };

  const h1StyleRegular = {
    fontFamily: "sans-serif",
    fontSize: "48px",
    fontWeight: 100,
    lineHeight: "64px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "0",
    color: "black",
  };

  const h3StyleRegular = {
    fontFamily: "sans-serif",
    fontWeight: 80,
    lineHeight: "34px",
  };

  const boldWordStyle = {
    fontWeight: 700,
  };

  const buttonStyle = {
    marginTop: "60px",
    backgroundColor: isHovered ? "black" : "white",
    color: isHovered ? "white" : "black",
    border: "2px solid black",
    borderRadius: "30px",
    padding: "10px 40px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div className="container">
      <Row style={footerStyle}>
        <Col style={{ marginTop: "80px" }} md={6}>
          <Col md={11}>
            <h1 style={h1StyleRegular}>
              The Avero <br /> Difference{" "}
              <span style={boldWordStyle}>embedded finance engine</span>
            </h1>
          </Col>
          <Col md={11}>
            <h3 style={h3StyleRegular}>
              Trusted experts who go the extra mile for customers to provide
              turn-key solutions, complete system integration, and comprehensive
              support.
            </h3>
            <Button
              style={{ ...buttonStyle, ...h3StyleRegular }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Learn More
            </Button>
          </Col>
        </Col>
        <Col style={{ marginTop: "10px" }} md={6}>
          <img src="img/img.png" className="img-responsive" alt="" />
        </Col>
      </Row>
    </div>
  );
};
