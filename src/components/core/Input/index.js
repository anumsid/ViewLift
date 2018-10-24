import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./index.scss";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focus: false };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur() {
    this.setState({ focus: false });
  }

  onFocus() {
    this.setState({ focus: true });
  }

  render() {
    const {
      label, id, type, value, onChange,
    } = this.props;
    const { focus } = this.state;
    const labelStyles = classNames({
      input__label: true,
      focus,
    });
    const styles = classNames({
      input__fieldset: true,
      focus,
    });

    return (
      <div className="input">
        <label className={labelStyles} htmlFor={id}>{label}</label>
        <div className="input__outline">
          <fieldset className={styles}>
            <legend className="input__legend" />
          </fieldset>
          <input onFocus={this.onFocus} onBlur={this.onBlur} className="input__field" id={id} type={type} value={value} onChange={onChange} />
        </div>
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
