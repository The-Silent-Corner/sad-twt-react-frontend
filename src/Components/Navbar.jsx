import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedIn } from "../Slices/loggedInSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state => state);
  if(loggedIn.value) {
    return (
      <>
        <nav className="navbar is-fixed-top" role="navigation">
          <nav className="navbar-start">
            <div className="navbar-brand">
              <a href="/" className="navbar-item title">TRUSTWORTHY TUTORS</a>
            </div>
          </nav>
          <nav className="navbar-end" id="navbar">
            <a className="navbar-item" onClick={ async(e) => {
              e.preventDefault();
              dispatch(setLoggedIn(false));
            } }>Logout</a>
          </nav>
        </nav>
      </>
    );
  }
  else {
    return (
      <>
        <nav className="navbar is-fixed-top" role="navigation">
          <nav className="navbar-start">
            <div className="navbar-brand">
              <Link to={{ pathname: "/" }} className="navbar-item title">TRUSTWORTHY TUTORS</Link>
            </div>
          </nav>
          <nav className="navbar-end" id="navbar">
            <Link to={{ pathname: "/" }} className="navbar-item">Home</Link>
            <Link to={{ pathname: "/register" }} className="navbar-item">Register</Link>
            <Link to={{ pathname: "/login" }} className="navbar-item">Login</Link>
          </nav>
        </nav>
      </>
    );
  }
};

export default Navbar;