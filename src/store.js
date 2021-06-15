import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./Slices/loggedInSlice";

export default configureStore({
  reducer: {
    loggedIn: loggedInReducer
  }
});