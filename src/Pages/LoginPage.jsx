import React from "react";
import LoginForm from "./PageComponents/LoginForm";
import Navbar from "../Components/Navbar";

const LoginPage = () => {
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