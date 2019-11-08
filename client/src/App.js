import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/pages/Landing"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import Profile from "./components/pages/Profile"

function App() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/profile" component={Profile} /> */}
        </div>
      </Router>
    );
}

export default App;
