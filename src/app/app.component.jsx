import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.scss";

import HomePage from "@/app/modules/home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
