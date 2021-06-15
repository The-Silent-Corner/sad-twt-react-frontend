import React from "react";
import api from "../api";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = React.useState();
  const [p1, setPW1] = React.useState();
  const [p2, setPW2] = React.useState();
  const [errorsNotification, setErrorsNotification] = React.useState({ hidden: true, message: "" });
  const history = useHistory();
  const { loggedIn } = useSelector(state => state);
  if(loggedIn.value === true) {
    history.push("/");
  }
  return (
    <>
      <Navbar />
      <section className="section column">
        <div className="title container has-text-centered">Register</div>
        <form id="register-form" method="post" onSubmit={async(e) => {
          e.preventDefault();
          if(p1 !== p2) {
            setErrorsNotification({
              hidden: false,
              message: "Passwords do not match."
            });
            return false;
          }
          document.getElementById("register-button").classList.add("is-loading");
          const resStatus = await api.register(email, p1, p2);
          if(resStatus === 500) {
            setErrorsNotification({
              hidden: false,
              message: "Something went wrong with the server."
            });
          } else if(resStatus === 409) {
            setErrorsNotification({
              hidden: false,
              message: "An existing user with that email already exists."
            });
          } else if(resStatus === 200) {
            setErrorsNotification({ hidden: true, message: "" });
          } else {
            setErrorsNotification({
              hidden: false,
              message: "Unable to connect to the server. Please contact an administrator or try again later."
            });
          }
          document.getElementById("register-button").classList.remove("is-loading");
        }}>
          <div className="container column is-half">
            <label htmlFor="email" className="label">
              Email
              <input type="email" className="input" required name="email" onChange={e => setEmail(e.target.value)} />
            </label>
            <label htmlFor="password" className="label">
              Password
              <input id="register-password1" type="password" className="input" required name="password1" onChange={e => setPW1(e.target.value)} />
            </label>
            <label htmlFor="password-confirm" className="label">
              Confirm password
              <input id="register-password2" type="password" className="input" required name="password2" onChange={e => setPW2(e.target.value)} />
            </label>
            <div className="has-text-centered m-5" hidden>
              <span className="notification is-danger is-light is-centered"> Passwords do not match </span>
            </div>
            <div className="container column has-text-centered">
              <div className="notification is-danger is-light" hidden={errorsNotification.hidden} >
                { errorsNotification.message }
              </div>
              <button id="register-button" className="button">Register</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default RegisterPage;