import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Review from "./components/Pages/Review";
import ErrorBoundary from "./components/ErrorBoundry";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Header />
          <Switch>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ErrorBoundary>
    </div>
  );
}
