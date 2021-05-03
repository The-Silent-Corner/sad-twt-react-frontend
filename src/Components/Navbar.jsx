import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar is-fixed-top" role="navigation">
        <nav className="navbar-start">
          <div className="navbar-brand">
            <a href="/" className="navbar-item title">TRUSTWORTHY TUTORS</a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" id="navbar-burger">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
        <nav className="navbar-end" id="navbar">
          <a href="/" className="navbar-item">Home</a>
          <a href="/register" className="navbar-item">Register</a>
          <a href="/login" className="navbar-item">Login</a>
        </nav>
      </nav>;
    </>
  );
};

export default Navbar;