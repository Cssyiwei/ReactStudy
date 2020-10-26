import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Redux from "./redux";
import ReactRedux from "./reactRedux";
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
              <Link to="/reactredux">react-redux</Link>
            </li>
            {/* <li>
              <Link></Link>
            </li> */}
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
        </Switch>
      </div>
    </Router>
  );
}
