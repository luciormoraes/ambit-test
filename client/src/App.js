import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Everyone from './components/EveryoneList';
import Males from './components/MaleList';
import Females from './components/FemaleList';
import Under30 from './components/Under30List';
import Over30 from './components/Over30List';
import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Everyone</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Link className="nav-item nav-link" to="/males">Males</Link>
         </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Link className="nav-item nav-link" to="/females">Females</Link>
         </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Link className="nav-item nav-link" to="/under30">Under30</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Link className="nav-item nav-link" to="/over30">Over30</Link>
        </div>
      </div>
    </div>
  </nav>
  <div className="container">
    <br/>
    <Route exact path="/" component={Everyone} />
    <Route exact path="/males" component={Males} />
    <Route exact path="/females" component={Females} />
    <Route exact path="/under30" component={Under30} />
    <Route exact path="/over30" component={Over30} />
  </div>
</div>
</Router>
      );
  }
}

export default App;
