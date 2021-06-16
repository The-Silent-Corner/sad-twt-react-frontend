import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./Slices/loggedInSlice";
import menuRightComponentReducer from "./Slices/menuRightComponentSlice";

export default configureStore({
  reducer: {
    loggedIn: loggedInReducer,
    menuRightComponent: menuRightComponentReducer
  }
});