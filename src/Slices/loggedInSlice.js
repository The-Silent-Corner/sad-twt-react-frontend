import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    value: typeof localStorage.getItem("login_iat") === "string"
  },
  reducers: {
    setLoggedIn: (state, action) => {
      if(action.payload === false) {
        api.logout()
          .then(() => {
            localStorage.removeItem("login_iat");
          });
      }
      state.value = action.payload;
    }
  }
});

export const {
  setLoggedIn
} = loggedInSlice.actions;

export default loggedInSlice.reducer;