import React from "react";
import { useSelector } from "react-redux";
import DefaultHomepage from "./DefaultHomepage";
import LoggedInHomepage from "./LoggedInHomepage";

const Homepage = () => {
  const loggedIn = useSelector((state) => state.loggedIn.value);
  if(!loggedIn) {
    return (
      <DefaultHomepage />
    );
  } else {
    return <LoggedInHomepage />;
  }
};

export default Homepage;