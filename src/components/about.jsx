import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const h1StyleRegular = {
    fontFamily: "sans-serif",
    fontSize: "48px",
    fontWeight: 100,
    lineHeight: "64px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "0",
    color: "black", // Adjust as needed
  };

  const h3StyleRegular = {
    fontFamily: "sans-serif",
    fontWeight: 80,
    lineHeight: "34px",
    // Adjust as needed
  };

  const boldWordStyle = {
    fontWeight: 700,
  };

  const buttonStyle = {
    marginTop: "40px",
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
      <Row style={{ marginTop: "20px" }}>
        <Col style={{ marginTop: "100px" }} md={6}>
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
        <Col md={6}>
          <img src="img/img.png" className="img-responsive" alt="" />
        </Col>
      </Row>
    </div>
  );
};
