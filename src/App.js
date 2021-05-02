import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
