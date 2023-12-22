import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=4"
        );
        const result = await response.json();
        // console.log(result);
        setData(result.blogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const row = {
    marginTop: "100px",
    marginBottom: "70px",
  };

  const h3StyleRegular = {
    fontFamily: "sans-serif",
    fontWeight: 80,
    lineHeight: "34px",
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

  const buttonStyle = {
    marginTop: "20px",
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
    borderRadius: "30px",
    padding: "5px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };

  const CardItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Col key={item.id} md={3}>
        <Card
          style={{ width: "100%", marginBottom: "10px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Card.Img
            style={{ height: "auto", width: "100%" }}
            variant="top"
            src={item.photo_url}
          />
          <Card.Body>
            <Card.Title>
              <h3 style={boldWordStyle}>{item.title}</h3>
            </Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>

          <Card.Body>
            <Button
              style={{
                ...buttonStyle,
                ...h3StyleRegular,
                backgroundColor: isHovered ? "black" : "white",
                color: isHovered ? "white" : "black",
              }}
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <div style={row} className="container">
      <Row>
        <Col md={11}>
          <h3 style={boldWordStyle}>Blogs</h3>
          <h1 style={h1StyleRegular}>Insightful Insights</h1>
        </Col>
      </Row>
      <Row>
        {data.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </Row>
    </div>
  );
};
