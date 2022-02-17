import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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
        <h4>Hello {finalEmail}</h4>
        <h1>hey {finalPassword}</h1>
      </Form>
    </div>
  );
};

export default LogIn;
