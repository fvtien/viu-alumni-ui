import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.scss";

import HomePage from "@/app/modules/home";
import NewsPage from "@/app/modules/news";
import NewsItemPage from "@/app/modules/news-item";
import JobPage from "./modules/job";
import JobItemPage from "./modules/job-item";
import UserPage from "./modules/user";
import UserItemPage from "./modules/user-item";
import LoginPage from "./modules/login";

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
          <Route exact path="/job">
            <JobPage />
          </Route>
          <Route path="/job/:jobId">
            <JobItemPage />
          </Route>
          <Route exact path="/user">
            <UserPage />
          </Route>
          <Route path="/user/:userId">
            <UserItemPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
