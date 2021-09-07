import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

const theme = createTheme({
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#A00000",
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>

        <Route path="/about">
          <About />
        </Route>

      </Router>
    </ThemeProvider>
  );
}

export default App;
