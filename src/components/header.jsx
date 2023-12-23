import React from "react";

export const Header = () => {
  const headerStyle = {
    background: "url(/img/BGImg.png) center center no-repeat",
    backgroundColor: "#e5e5e5",
    backgroundSize: "cover",
    display: "table",
    width: "100%",
    padding: "0",
  };

  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.2)",
  };

  const h1Style = {
    fontFamily: "sans-serif",
    color: "#fff",
    fontSize: "10rem",
    fontWeight: "500",
    marginTop: "0",
  };

  const spanStyle = {
    fontWeight: "200",
    
  };

  const pStyle = {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "300",
    lineHeight: "30px",
    margin: "0 auto",
  };

  const introTextStyle = {
    paddingTop: "350px",
    paddingBottom: "100px",
  };

  return (
    <header id="header" style={headerStyle}>
      <div className="intro">
        <div className="overlay" style={overlayStyle}>
          <div className="container">
            <div className="row">
              <div className="intro-text" style={introTextStyle}>
                <p style={pStyle}>Extra Aspirational</p>
                <h1 style={h1Style}>
                  Avero. <span style={spanStyle}>Pushing engineering forward.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
