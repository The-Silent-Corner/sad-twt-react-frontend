import React from "react";
import LoginForm from "./PageComponents/LoginForm";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const { loggedIn } = useSelector(state => state);
  if(loggedIn.value === true) {
    window.location.replace("/");
    return <></>;
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
  // return (() => {
  //   const { loggedIn } = useSelector(state => state);
  //   if(loggedIn.value === true) {
  //     window.location.replace("/");
  //     return <></>;
  //   } else {
  //     return (
  //       <>
  //         <Navbar />
  //         <section className="section column">
  //           <h1 className="title has-text-centered">Login</h1>
  //           <LoginForm />
  //         </section>
  //       </>
  //     );
  //   }
  // })();
};

export default LoginPage;