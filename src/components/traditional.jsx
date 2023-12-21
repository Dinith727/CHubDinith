import React from "react";

const Traditional = (props) => {
  const customStyles = {
    // Other styles can be added here
    marginLeft: "205px", // Default margin
  };

  const mediaQuery = "@media (min-width: 992px)"; // Adjust the breakpoint as needed

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 mx-auto"
            // style={{ ...customStyles, [mediaQuery]: { marginLeft: "0" } }}
          >
            <h4>{props.data ? props.data.paragraph : "loading..."}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traditional;

// export default ;
