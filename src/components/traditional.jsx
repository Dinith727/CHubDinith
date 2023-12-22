// import React from "react";

// const Traditional = (props) => {
//   const customStyles = {
//     // Other styles can be added here
//     marginLeft: "205px", // Default margin
//   };

//   const mediaQuery = "@media (min-width: 992px)"; // Adjust the breakpoint as needed

//   return (
//     <div id="about">
//       <div className="container">
//         <div className="row">
//           <div
//             className="col-md-6 mx-auto"
//             // style={{ ...customStyles, [mediaQuery]: { marginLeft: "0" } }}
//           >
//             <h4>{props.data ? props.data.paragraph : "loading..."}</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Traditional;

// export default ;
import React from "react";
import { Row, Col } from "react-bootstrap";

export const Traditional = () => {

  const row = {
    marginTop: "100px",
    marginBottom: "100px",
  };

  const h3StyleRegular = {
    fontFamily: "sans-serif",
    fontWeight: 80,
    lineHeight: "44px",
    color: "black",
  };

  return (
    <div className="container">
      <Row style={row}>
        <Col md={2}></Col>
        <Col md={6}>
          <h3 style={h3StyleRegular}>
            Traditional: Aversan delivers leading-edge and reliable
            safety-critical electronics, software systems, expert resources and
            business-fortifying solution
          </h3>
        </Col>
      </Row>
    </div>
  );
};
