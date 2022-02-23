import React from "react";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./login";
import navbar from "./navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={navbar} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
