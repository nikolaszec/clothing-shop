import React from "react";
import "./with-spinner.styles.scss";

const withSpinner = (Component) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <Component {...otherProps} />
    );
  };

  return Spinner;
};

export default withSpinner;
