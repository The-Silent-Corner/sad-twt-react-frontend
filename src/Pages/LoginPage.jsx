import React from "react";
import LoginForm from "./PageComponents/LoginForm";
import Navbar from "../Components/Navbar";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const history = useHistory();
  const { loggedIn } = useSelector(state => state);
  if(loggedIn.value === true) {
    history.push("/");
  }
  return (
    <>
      <Navbar />
      <section className="section column">
        <h1 className="title has-text-centered">Login</h1>
        <LoginForm />
      </section>
    </>
  );
};

export default LoginPage;