import React from "react";

export const Traditional = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div>
              <h4>{props.data ? props.data.paragraph : "loading..."}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
