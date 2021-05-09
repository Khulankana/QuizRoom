import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Home';
import CreateTestPage from '../CreateTest';
import Register from '../Register';
import Category from '../CategoryPage';
import AnswerQuiz from '../AnswerQuiz';
import AfterLogin from '../AfterLogin'

export default function App() {
      return(
            <Router>
                  <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/createTest' component={CreateTestPage}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/category' component={Category}/>
                        <Route path='/test' component={AnswerQuiz}/>
                        <Route path='/login' component={AfterLogin}/>
                  </Switch>
            </Router>
      );
}