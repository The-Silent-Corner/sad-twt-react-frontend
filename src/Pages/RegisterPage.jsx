import React from "react";

const RegisterPage = () => {
  return (
    <>
      <section className="section column">
        <div className="title container has-text-centered">Register</div>
        <form id="register-form" method="post">
          <div className="container column is-half">
            <label htmlFor="email" className="label">
              Email
              <input type="email" className="input" required name="email" />
            </label>
            <label htmlFor="password" className="label">
              Password
              <input id="register-password1" type="password" className="input" required name="password1" />
            </label>
            <label htmlFor="password-confirm" className="label">
              Confirm password
              <input id="register-password2" type="password" className="input" required name="password2" />
            </label>
            <div className="control column container has-text-centered" id="radio-register">
              <label className="radio">
                <input type="radio" name="type" value="student" required className="radio-register-check" />
                  Student
              </label>
              <label className="radio">
                <input type="radio" name="type" value="tutor" required className="radio-register-check" />
                  Tutor
              </label>
              <label className="radio">
                <input type="radio" name="type" value="parent" required className="radio-register-check" />
                  Parent
              </label>
            </div>
            <div className="container column has-text-centered">
              <div id="register-button-notification" className="notification is-danger is-light" hidden>
                Passwords do not match
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