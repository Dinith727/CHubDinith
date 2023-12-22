import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";

const agendaData = [
  { id: 1, title: "Item 1", imageUrl: "img/img.png" },
  { id: 2, title: "Item 2", imageUrl: "img/about.jpg" },
  { id: 3, title: "Item 3", imageUrl: "img/plane1.png" },
  // Add more items as needed
];

const Gallery2 = () => {
  const [hoveredItemId, setHoveredItemId] = useState(1);

  const handleItemHover = (itemId) => {
    setHoveredItemId(itemId);
  };

  const row = {
    marginTop: "100px",
    marginBottom: "100px",
  };

  const agendaItemStyle = {
    cursor: "pointer",
    padding: "10px",
    marginBottom: "5px",
    border: "1px solid #ccc",
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

  const hoveredItemStyle = {
    backgroundColor: "#f0f0f0",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    border: "1px solid #ccc",
  };

  return (
    <div style={row} className="container">
      <Row>
        <Col style={{ marginTop: "80px" }} md={6}>
          <Col md={11}>
            <h1 style={h1StyleRegular}>
              Lorem ipsum <br />
              <span style={boldWordStyle}>connecter</span> Auctor
            </h1>
          </Col>
          <Col md={11}></Col>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Table striped bordered hover>
            <tbody>
              {agendaData.map((item) => (
                <tr
                  key={item.id}
                  onMouseEnter={() => handleItemHover(item.id)}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          {hoveredItemId !== null && (
            <img
              src={
                agendaData.find((item) => item.id === hoveredItemId)?.imageUrl
              }
              alt={`Item ${hoveredItemId}`}
              style={imageStyle}
            />
          )}
        </Col>
      </Row>
    </div>
    // <div style={{ display: "flex", alignItems: "flex-start" }}>
    //   <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
    //     {agendaData.map((item) => (
    //       <li
    //         key={item.id}
    //         style={{
    //           ...agendaItemStyle,
    //           ...(hoveredItemId === item.id ? hoveredItemStyle : {}),
    //         }}
    //         onMouseEnter={() => handleItemHover(item.id)}
    //         onMouseLeave={() => handleItemHover(null)}
    //       >
    //         <h3>{item.id}</h3>
    //         <h3>{item.title}</h3>

    //       </li>
    //     ))}
    //   </ul>
    //   <div style={{ marginLeft: "20px" }}>
    //     {hoveredItemId !== null && (
    //       <img
    //         src={agendaData.find((item) => item.id === hoveredItemId)?.imageUrl}
    //         alt={`Item ${hoveredItemId}`}
    //         style={imageStyle}
    //       />
    //     )}
    //   </div>
    // </div>
  );
};

export default Gallery2;
