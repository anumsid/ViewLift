import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

/* eslint-disable react/button-has-type */
const Button = ({ type, label }) => (
  <button className="button" type={type}>{label}</button>
);
/* eslint-enable react/button-has-type */

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
