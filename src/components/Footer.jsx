import React from "react";
import { Col, Row } from "react-bootstrap";

export const Footer = () => {
  const row = {
    marginTop: "100px",
  };

  const h3StyleRegular = {
    fontFamily: "sans-serif",
    fontWeight: 30,
    lineHeight: "34px",
  };

  const ulStyle = {
    listStyleType: "none",
    padding: "0",
  };

  const liStyle = {
    fontFamily: "sans-serif",
    fontWeight: 80,
    fontSize: "16px",
    lineHeight: "25px",
    marginBottom: "10px",
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <Row>
            <Col md={6}>
              <Col md={10}>
                <div>
                  <h3 style={h3StyleRegular}>
                    Aversan Inc. is a multi-service engineering firm
                    specializing in design, build, testing, certification, and
                    support services for embedded flight systems & software,
                    health technology, and advanced IT.
                  </h3>
                </div>
              </Col>
            </Col>
            <Col md={3}>
              <h3 style={h3StyleRegular}>WHAT WE DO</h3>

              <ul style={ulStyle}>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>System Integration</li>
                <li style={liStyle}>Test Automation</li>
                <li style={liStyle}>Independent Verification & Validation</li>
                <li style={liStyle}>Application Development</li>
                <li style={liStyle}>Professional Services</li>
              </ul>
            </Col>
            <Col md={3}>
              <h3 style={h3StyleRegular}>INDUSTRIES</h3>
              <ul style={ulStyle}>
                <li style={liStyle}>Aerospace & Defense</li>
                <li style={liStyle}>Medical Devices</li>
                <li style={liStyle}>Digital Health</li>
                <li style={liStyle}>Rail & Transportation</li>
              </ul>
            </Col>
          </Row>
          <Row style={row}>
            <Col md={6} className="d-flex justify-content-between">
              <span style={{ ...liStyle, marginRight: "20px" }}>Terms & Conditions</span>

              <span style={liStyle}>Privacy Policy</span>
            </Col>
            <Col md={3}>
              <span style={{ ...liStyle, marginRight: "20px" }}>Culture</span>

              <span style={liStyle}>Careers</span>
            </Col>
            <Col md={3}>
              <i style={{ marginRight: "20px", height:"200px" }} className="fa fa-linkedin"></i>
              <i style={{ marginRight: "20px", height:"200px" }}className="fa fa-instagram"></i>
              <i className="fa fa-twitter"></i>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
