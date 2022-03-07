import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
//import style from "./style.css";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [finalEmail, setFinalEmail] = useState();

  const [password, setPassword] = useState();
  const [finalPassword, setFinalPassword] = useState();

  const inputEvent = (event) => {
    //email
    setEmail(event.target.value);
  };

  const inputEvent2 = (event) => {
    //finalemail
    event.preventDefault();
    setFinalEmail(email);
    setFinalPassword(password);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  //   const inputPassword2 = () => {
  //     setFinalPassword(password);
  //   };

  return (
    <div>
      <section>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand">Home</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li> */}
                {/* <li class="nav-item">
                  <a class="nav-link" href="#">
                    SignIn
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    LogIn
                  </a>
                </li> */}
              </ul>
              new user!
              <button class="btn btn-outline-success" type="submit">
                <Link to="/SignUp">SignIn</Link>
              </button>
            </div>
          </div>
        </nav>
      </section>

      <Form className="signup-form" onSubmit={inputEvent2}>
        <h1 className="heading">Log In</h1>

        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={inputEvent}
            placeholder="Enter email"
            value={email}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={inputPassword}
            placeholder="Enter Password "
            value={password}
          />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block" type="submit">
          Log In
        </Button>
        {/* <h4>Hello {finalEmail}</h4>
        <h1>hey {finalPassword}</h1> */}
      </Form>
    </div>
  );
};

export default LogIn;
