import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux"
import jwt_decode from "jwt-decode";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import BaseTable from "./pages/BaseTable"

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import store from "./store"

import "bootstrap/dist/css/bootstrap.min.css";

const token = JSON.parse(localStorage.getItem("jwtToken"));

// Check for token to keep user logged in
if (token) {
  // Set auth token header auth
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./Login";
  }
};

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/Login"><Login /></Route>
            <Route exact path="/SignUp"><SignUp /></Route>
            <Route exact path="/ForgotPassword"><ForgotPassword /></Route>
            <Route exact path="/Home"><Home /></Route>
            <Route exact path="/BaseTable/:basename"><BaseTable /></Route>
            <PrivateRoute exact path="/Dashboard" component={Dashboard} />
            <Route path="/*"><Home /></Route>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;