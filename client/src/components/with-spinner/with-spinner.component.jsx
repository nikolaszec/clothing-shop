import React from "react";
import "./with-spinner.styles.scss";
import Spinner from "../spinner/spinner.component";

const withSpinner = (Component) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <Component {...otherProps} />;
  };
};

export default withSpinner;
