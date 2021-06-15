import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./features/counter/loggedInSlice";

export default configureStore({
  reducer: {
    loggedIn: loggedInReducer
  }
});