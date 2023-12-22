import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className=" intro-text">
                
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
