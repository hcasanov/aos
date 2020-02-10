import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SuccessLog from "./components/SuccessLog";
import NotFound from "./components/NotFound";
import FormLog from "./components/LoginForm";

import { PrivateRoute } from "./components/PrivateRoute"

import "./style.css";

class Root extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>AOS</h1>
          <h3>Casanova Hugo</h3>
          <Switch>
            <Route exact path="/">
              <FormLog />
            </Route>
            <PrivateRoute exact path="/success" component={SuccessLog} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
