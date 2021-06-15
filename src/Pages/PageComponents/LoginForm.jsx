import React from "react";
import api from "../../api/index";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../Slices/loggedInSlice";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [errorsNotification, setErrorsNotificaiton] = React.useState({ hidden: true, message: "" });
  const dispatch = useDispatch();
  const history = useHistory();
  async function onFormSubmitHandler() {
    document.getElementById("login-button").classList.add("is-loading");
    const status = await api.postLogin(email, password);
    document.getElementById("login-button").classList.remove("is-loading");
    if(status === 200) {
      dispatch(setLoggedIn(true));
      history.push("/");
    } else if(status === 401) {
      setErrorsNotificaiton({ hidden: false, message: "Invalid credentials." });
    }
  }
  return (
    <>
      <form id="login-form" method="post" onSubmit={async(e) => {
        e.preventDefault();
        await onFormSubmitHandler();
      }}>
        <div className="container column is-half">
          <label htmlFor="login-form" className="label">
            Email
            <input type="email" className="input" required name="email" onChange={e => {
              setEmail(e.target.value);
            }} />
          </label>
          <label htmlFor="login-form" className="label">
            Password
            <input type="password" required className="input" name="password" onChange={e => {
              setPassword(e.target.value);
            }} />
          </label>
          <div className="container column has-text-centered">
            <div className="notification is-danger is-light" hidden={errorsNotification.hidden} >
              { errorsNotification.message }
            </div>
            <button id={"login-button"} className="button">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;