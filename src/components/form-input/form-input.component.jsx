import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherInputProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherInputProps}
      />
      {label ? (
        <label
          className={`form-input-label ${
            otherInputProps.value.length > 0 ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
