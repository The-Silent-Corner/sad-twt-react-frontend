import React from "react";
import Navbar from "../Components/Navbar";

export default function LoggedInHomepage() {
  return (
    <>
      <Navbar />
      <div className="container column">
        <div className="has-text-centered">
          <span className="title is-4 has-text-centered">Hello, user</span>
        </div>
      </div>
    </>
  );
}