import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { login } from "../actions/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setisLoggedIn]);

  if (checking) {
    return <h1>Cargando...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" isLogggedIn={isLoggedIn}>
            <AuthRouter />
          </PublicRoute>
          <PrivateRoute exact path="/" isLogggedIn={isLoggedIn}>
            <JournalScreen />
          </PrivateRoute>
          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  );
};
