import React from "react";
import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";
import NotFound404 from "./ErrorPages/NotFound404";
import Homepage from "./Pages/Homepage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/register"} component={RegisterPage} />
          <Route exact path={"/login"} component={LoginPage} />
          <Route component={NotFound404} />
        </Switch>
      </Router>
    </>
  );
};

export default App;