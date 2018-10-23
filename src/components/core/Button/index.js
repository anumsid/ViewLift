import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, myProp }) => (
  <div>
    <button type={type} prop={myProp} />
  </div>
);

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  myProp: PropTypes.number,
};
