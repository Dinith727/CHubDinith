import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

export const Nuclear = () => {
  const [hoveredCol, setHoveredCol] = useState(null);

  const row = {
    marginTop: "10px",
    marginBottom: "10px",
  };

  const handleMouseEnter = (index) => {
    setHoveredCol(index);
  };

  const handleMouseLeave = () => {
    setHoveredCol(null);
  };

  const columns = [
    { image: "/img/Areo.png", hoveredImage: "/img/AreoHoverd.png" },
    { image: "/img/Health.png", hoveredImage: "/img/HealthHoverd.png" },
    { image: "/img/Rail.png", hoveredImage: "/img/RailHoverd.png" },
    { image: "/img/Medical.png", hoveredImage: "/img/MedicalHoved.png" },
  ];

  return (
    <div className="container">
      <Row style={row}>
        {columns.map((col, index) => (
          <Col style={{
            marginBottom: "100px",
            transition: "transform 1s ease", // Smooth transition
            transform:
              hoveredCol === index ? "scale(1.01)" : "scale(1)", // Scale on hover
          }} key={index} md={3} sm={6}>
            <img
              src={hoveredCol === index ? col.hoveredImage : col.image}
              className="img-responsive"
              alt=""
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};


