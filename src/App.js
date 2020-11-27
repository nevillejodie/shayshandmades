import './App.css';
import Home from './Home/home'
import About from './About/about'
import Browse from './Browse/browse'
import Order from './Order/order'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/order">
            <Order />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

