import React from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../api";
import { setLoggedIn } from "../features/counter/loggedInSlice";

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
              await api.logout();
              localStorage.removeItem("login_iat");
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
              <a href="/" className="navbar-item title">TRUSTWORTHY TUTORS</a>
            </div>
          </nav>
          <nav className="navbar-end" id="navbar">
            <a href="/" className="navbar-item">Home</a>
            <a href="/register" className="navbar-item">Register</a>
            <a href="/login" className="navbar-item">Login</a>
          </nav>
        </nav>
      </>
    );
  }
};

export default Navbar;