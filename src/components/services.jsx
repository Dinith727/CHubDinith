import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const Services = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    fontFamily: "sans-serif",
    fontSize: "16px",
    fontWeight: "304",
    textAlign: "left",
    color: "black",
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
      <Row style={row}>
        <Col  md={4}>
          <Col md={11}>
          <h3 style={boldWordStyle}>
           CAREERS
            </h3>
            <h1 style={h1StyleRegular}>
              Be a part of <br /> our story <br /> 
              {/* {" "}
              <span style={boldWordStyle}>embedded finance engine</span> */}
            </h1>
          </Col>
          <Col md={11}>
            <h3 style={h3StyleRegular}>
            At Avero, we're always looking for creative problem solvers to join our team
            </h3>
            <Button
              style={{ ...buttonStyle, ...h3StyleRegular }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Join Now
            </Button>
          </Col>
        </Col>
        <Col style={{ marginTop: "10px" }} md={4}>
          <img src="img/img.png" className="img-responsive" alt="" />
        </Col>
        <Col style={{ marginTop: "10px" }} md={4}>
          <img src="img/img.png" className="img-responsive" alt="" />
        </Col>
      </Row>
    </div>
  );
};
