import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ children, isLogggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isLogggedIn === true ? <Redirect to="/" /> : children)}
    />
  );
};
