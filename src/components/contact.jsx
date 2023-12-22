import React from "react";
import { Col, Row } from "react-bootstrap";

export const Contact = () => {
  const h3StyleRegular = {
    fontFamily: "sans-serif",
    fontWeight: 30,
    lineHeight: "34px",
  };

  const ulStyle = {
    listStyleType: "none", // Remove default list styles (optional)
    padding: "0", // Remove default padding (optional)
  };

  const liStyle = {
    fontFamily: "sans-serif",
    fontWeight: 80,
    fontSize: "16px",
    lineHeight: "25px",
    marginBottom: "10px", // Adjust the margin bottom to create a gap
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
                  Aversan Inc. is a multi-service engineering firm specializing
                  in design, build, testing, certification, and support services
                  for embedded flight systems & software, health technology, and
                  advanced IT.
                  </h3>
              </div>
            </Col>
            </Col>
            <Col md={3}>
              <h3 style={h3StyleRegular}>What We Do</h3>

              <ul style={ulStyle}>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
              </ul>
            </Col>
            <Col md={3}>
              <h3 style={h3StyleRegular}>What We Do</h3>
              <ul style={ulStyle}>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
                <li style={liStyle}>Product development</li>
              </ul>
            </Col>
            
          </Row>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <i className="fa fa-facebook"></i>
                    {/* <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a> */}
                  </li>
                  <li>
                    <i className="fa fa-twitter"></i>
                    {/* <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a> */}
                  </li>
                  <li>
                    <i className="fa fa-youtube"></i>
                    {/* <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
