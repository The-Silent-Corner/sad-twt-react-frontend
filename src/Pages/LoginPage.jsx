import React from "react";
import LoginForm from "./PageComponents/LoginForm";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { loggedIn } = useSelector(state => state);
  if(loggedIn.value === true) {
    return (
      <>
        <Navbar />
        <section className="section column">
          <div className="has-text-centered">
            <h1 className="title is-2"> You Are already logged in. </h1>
            <div><span>Click <Link to={{ pathname: "/" }} replace>here</Link> to go to the dashboard.</span></div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <section className="section column">
          <h1 className="title has-text-centered">Login</h1>
          <LoginForm />
        </section>
      </>
    );
  }
};

export default LoginPage;