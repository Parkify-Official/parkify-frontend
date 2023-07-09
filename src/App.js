import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Route component={loadable(() => import("./views/pages/404"))} />
    </Router>
  );
}
