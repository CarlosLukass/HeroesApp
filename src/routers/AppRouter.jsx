import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { LoginPage } from "../pages/LoginPage";
// Router for Login
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div> 
        <Switch>
          <Route exact path="/login" component={ LoginPage } />
          <Route path="/" component={DashboardRouter} />

        </Switch>
      </div>
    </Router>
  );
};
