import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Redux from "./redux";
import ReactRedux from "./reactRedux";
import NewMain from "./promise";
import NewThunk from "./middlewaredemo";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex-s">
            <li style={{ marginRight: "20px" }}>
              <Link to="/redux">redux</Link>
            </li>
            <li>
              <Link to="/reactredux" style={{ marginRight: "20px" }}>
                react-redux
              </Link>
            </li>
            <li>
              <Link to="/promise" style={{ marginRight: "20px" }}>
                promise
              </Link>
            </li>
            <li>
              <Link to="/middlewaredemo">middlewaredemo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/redux">
            <React.StrictMode>
              <Redux />
            </React.StrictMode>
          </Route>
          <Route path="/reactredux">
            <ReactRedux />
          </Route>
          <Route path="/promise">
            <NewMain />
          </Route>
          <Route path="/middlewaredemo">
            <NewThunk />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
