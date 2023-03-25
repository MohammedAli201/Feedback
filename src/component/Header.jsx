import React from "react";
import PropTypes from "prop-types";
function Header({ text, bgColor, textColor }) {
  const backClr = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "white",
  };
  return (
    <header style={backClr}>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  );
}

Header.defualtProps = {
  text: "Feedback UI Hi",
  bgColor: "rgba(0,0,0,0.4)",
};
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
