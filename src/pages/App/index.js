import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home";
import TestListsPage from "../TestListsPage";
import Register from "../UserRegistration";
import Login from "../UserLogin";
import AnswerQuiz from "../AnswerQuiz";
import LoginPage from "../LoginPage";
import TestInfoPage from "../TestInfoPage";
import TestContent from "../TestContent";
import Test from "../Test";
import Email from "../Email";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test_lists" component={TestListsPage} />
        <Route path="/register" component={Register} />
        <Route path="/userLogin" component={Login} />
        <Route path="/email" component={Email} />
        <Route path="/test_info" component={TestInfoPage} />
        <Route path="/test_content" component={TestContent} />
        <Route path="/test_content/test" component={Test} />
        <Route path="/test" component={AnswerQuiz} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}
