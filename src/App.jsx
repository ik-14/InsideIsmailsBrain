import React from "react";
import { Router, Route, Link } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Photos from "./pages/Photos";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/photos" component={Photos} />
    </Router>
  );
};

export default App;
