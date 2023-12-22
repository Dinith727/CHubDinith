import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

export const Features = () => {
  const [hoveredCol, setHoveredCol] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCol(index);
  };

  const handleMouseLeave = () => {
    setHoveredCol(null);
  };

  const columns = [
    { image: "/img/plane1.png", hoveredImage: "/img/plane2.png" },
    { image: "/img/plane1.png", hoveredImage: "/img/plane2.png" },
    { image: "/img/plane1.png", hoveredImage: "/img/plane2.png" },
    { image: "/img/plane1.png", hoveredImage: "/img/plane2.png" },
  ];

  return (
    <div className="container">
      <Row>
        {columns.map((col, index) => (
          <Col key={index} style={{ marginTop: "10px" }} lg={3}>
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
