import React from "react";
import { Row, Col } from "react-bootstrap";

export const Traditional = () => {

  const row = {
    marginTop: "100px",
    marginBottom: "100px",
  };

  const h3StyleRegular = {
    fontFamily: "sans-serif",
    fontWeight: 80,
    fontSize: "20px",
    lineHeight: "44px",
    color: "black",
  };

  return (
    <div className="container">
      <Row style={row}>
        <Col md={2}></Col>
        <Col md={6}>
          <h3 style={h3StyleRegular}>
            Traditional: Aversan delivers leading-edge and reliable
            safety-critical electronics, software systems, expert resources and
            business-fortifying solution
          </h3>
        </Col>
      </Row>
    </div>
  );
};
