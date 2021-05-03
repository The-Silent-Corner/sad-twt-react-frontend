import React from "react";
import LoginForm from "./PageComponents/LoginForm";

const LoginPage = () => {
  return (
    <>
      <section className="section column">
        <h1 className="title has-text-centered">Login</h1>
        <LoginForm />
      </section>
    </>
  );
};

export default LoginPage;