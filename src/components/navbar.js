import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./login";
import SignUp from "./SignUp";

const Navbar = () => {
  return (
    <>
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
              <button class="btn btn-outline-success" type="submit">
                <Link to="/SignUp">SignIn</Link>
              </button>
              <button class="btn btn-outline-success" type="submit">
                <Link to="/login">LogIn</Link>
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Navbar;
