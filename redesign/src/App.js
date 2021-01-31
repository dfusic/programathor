import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/fonts.css";

import { Homepage, AboutUs, Contact } from "./pages";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <Header />

    <Switch>
      <Route path="/" exact>
        {Homepage}
      </Route>
      <Route path="/about-us" exact>
        {AboutUs}
      </Route>
      <Route path="/contact" exact>
        {Contact}
      </Route>
    </Switch>
    <Footer />
  </Router>
);
export default App;
