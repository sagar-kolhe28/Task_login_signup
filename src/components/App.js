import React from "react";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
