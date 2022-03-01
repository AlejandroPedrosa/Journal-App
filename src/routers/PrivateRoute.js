import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ children, isLogggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isLogggedIn === true ? children : <Redirect to="/auth/login" />
      }
    />
  );
};
