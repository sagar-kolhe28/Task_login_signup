import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import style from "./style.css";

const SignUp = () => {
  const [fName, setFname] = useState();
  const [finalfName, setFinalFname] = useState();

  const [lName, setLname] = useState();
  const [finallName, setFinalLname] = useState();

  const [email, setEmail] = useState();
  const [finalemail, setFinalEmail] = useState();

  const [phone, setPhone] = useState();
  const [fphone, setFinalPhone] = useState();

  const [password, setPassword] = useState();
  const [fpassword, setFinalPassword] = useState();

  const [confpass, setConPassword] = useState();
  const [fconfpass, setFinalConPassword] = useState();

  const inputFname = (event) => {
    setFname(event.target.value);
  };

  const inputLname = (event) => {
    setLname(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPhone = (event) => {
    setPhone(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const inputConfPass = (event) => {
    setConPassword(event.target.value);
  };

  const inputEvent2 = (event) => {
    event.preventDefault();
    setFinalEmail(email);
    setFinalFname(fName);
    setFinalLname(lName);
    setFinalPhone(phone);
    setFinalPassword(password);
    setFinalConPassword(confpass);
  };

  return (
    <div>
      <Form className="signup-form" onSubmit={inputEvent2}>
        <h1 className="heading">Sign Up</h1>

        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            onChange={inputFname}
            placeholder="Enter First Name"
            value={fName}
          />
        </FormGroup>

        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input
            type="text"
            name="lastname"
            id="lastname"
            onChange={inputLname}
            placeholder="Enter Last Name"
            value={lName}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={inputEmail}
            placeholder="Enter email"
            value={email}
          />
        </FormGroup>

        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input
            type="phone"
            name="phone"
            id="phone"
            onChange={inputPhone}
            placeholder="Enter Phone Number"
            value={phone}
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

        <FormGroup>
          <Label for="repassword">Confirm Password</Label>
          <Input
            type="password"
            name="repassword"
            id="repassword"
            onChange={inputConfPass}
            placeholder="Confirm Password"
            value={confpass}
          />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block" type="submit">
          Submit
        </Button>
        <h4>hello {finalfName}</h4>
        <h4>hello {finallName}</h4>
        <h4>hello {finalemail}</h4>
        <h4>hello {fphone}</h4>
        <h4>hello {fpassword}</h4>
        <h4>hello {fpassword}</h4>
      </Form>
    </div>
  );
};

export default SignUp;
