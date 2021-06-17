import { createSlice } from "@reduxjs/toolkit";
import ComponentMappings from "../Components/MenuListComponents/ComponentMappings";

function determineLocalStorageRightComponent() {
  const r = sessionStorage.getItem("menuRightComponent");
  if(!r) {
    return ComponentMappings.dashboard;
  }
  return r;
}

export const menuRightComponentSlice = createSlice({
  name: "menuRightComponent",
  initialState: {
    value: determineLocalStorageRightComponent()
  },
  reducers: {
    setRightComponent: (state, action) => {
      state.value = action.payload;
      sessionStorage.setItem("menuRightComponent", action.payload);
    }
  }
});

export const {
  setRightComponent
} = menuRightComponentSlice.actions;

export default menuRightComponentSlice.reducer;
