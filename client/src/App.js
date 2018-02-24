import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import InvestmentList from "./components/InvestmentList";
import SingleInvestmentPage from "./components/SingleInvestmentPage";
import "./App.css";

class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/users/:id/investments" component={InvestmentList}/>
              <Route exact path="/users/:user_id/investments/:id" component={SingleInvestmentPage}/>
            </Switch>
          </div>
        </Router>
        )
    }
}

export default App