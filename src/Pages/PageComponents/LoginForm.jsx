import React from "react";
import api from "@api";

const LoginForm = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [userType, setUserType] = React.useState();
  return (
    <>
      <form id="login-form" method="post" onSubmit={e => {
        e.preventDefault();
        alert(`${email}, ${password}, ${userType}`);
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
          <div className="control column container has-text-centered" id="login-radio">
            <label htmlFor="login-form" className="radio">
              <input type="radio" name="type" value="student" required className="radio-login-check" onClick={() => {
                setUserType("student");
              }}/>
              Student
            </label>
            <label htmlFor="login-form" className="radio">
              <input type="radio" name="type" value="tutor" required className="radio-login-check" onClick={() => {
                setUserType("tutor");
              }}/>
              Tutor
            </label>
            <label htmlFor="login-form" className="radio">
              <input type="radio" name="type" value="parent" required className="radio-login-check" onClick={() => {
                setUserType("parent");
              }} />
              Parent
            </label>
          </div>
          <div className="container column has-text-centered">
            <button className="button">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;