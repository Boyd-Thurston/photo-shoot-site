import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <p>I am the home page</p>
      </Route>
      <Route path="/gallery">
        <p>I am the gallery page</p>
      </Route>
      <Route path="/about">
        <p>I am the about page</p>
      </Route>
    </Router>
  );
}

export default App;
