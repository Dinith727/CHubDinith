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
        <Col style={{ marginTop: "10px" }} md={4}>
          <img src="img/img.png" className="img-responsive" alt="" />
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
