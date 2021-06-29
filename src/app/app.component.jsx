import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.scss";

import HomePage from "@/app/modules/home";
import NewsPage from "@/app/modules/news";
import NewsItemPage from "@/app/modules/news-item";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/news">
            <NewsPage />
          </Route>
          <Route path="/news/:newsId">
            <NewsItemPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
