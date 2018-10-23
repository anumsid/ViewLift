import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Input = ({ label, type, id }) => (
  <div className="input">
    <label className="input__label" htmlFor={id}>{label}</label>
    <div className="input__outline">
      <input className="input__field" id={id} type={type} />
    </div>
  </div>
);

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
