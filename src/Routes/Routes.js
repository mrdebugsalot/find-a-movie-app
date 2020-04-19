import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import MovieDetails from "../MovieDetails/MovieDetails";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/showMovie" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
