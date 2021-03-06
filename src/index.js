import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/home";
import About from "pages/about";
import Products from "pages/products";
import Learn from "pages/learn";
import Data from "pages/data";
import Connect from "pages/connect";
import PageNotFound from "pages/page-not-found";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/learn" component={Learn} />
      <Route path="/data" component={Data} />
      <Route path="/connect" component={Connect} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
