import { createSlice } from "@reduxjs/toolkit";

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    value: typeof localStorage.getItem("login_iat") === "string"
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const {
  setLoggedIn,
  unsetLoggedIn
} = loggedInSlice.actions;

export default loggedInSlice.reducer;