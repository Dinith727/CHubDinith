import React, { useState } from "react";

const Cards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardsData = [
    {
      title: "Card 1",
      imageSrc: "https://placekitten.com/200/200",
    },
    {
      title: "Card 2",
      imageSrc: "https://placekitten.com/201/201",
    },
    {
      title: "Card 3",
      imageSrc: "https://placekitten.com/202/202",
    },
    {
      title: "Card 4",
      imageSrc: "https://placekitten.com/203/203",
    },
  ];

  const cardStyles = {
    width: "200px",
    margin: "10px",
    position: "relative",
    overflow: "hidden",
  };

  const imageStyles = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="card-container">
      <div className="row">
        {cardsData.map((card, index) => {
          const buttonStyles = {
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#3498db",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: hoveredCard === index ? "block" : "none",
          };

          return (
            <div
              key={index}
              className="col-md-6 card"
              style={cardStyles}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={card.imageSrc} alt={card.title} style={imageStyles} />
              <div className="card-body">
                <button
                  className="btn btn-primary"
                  style={buttonStyles}
                >
                  {card.title}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
