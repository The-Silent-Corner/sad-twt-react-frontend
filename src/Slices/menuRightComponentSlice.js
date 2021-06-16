import { createSlice } from "@reduxjs/toolkit";
import ComponentMappings from "../Components/MenuListComponents/ComponentMappings";

export const menuRightComponentSlice = createSlice({
  name: "menuRightComponent",
  initialState: {
    value: ComponentMappings.dashboard
  },
  reducers: {
    setRightComponent: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const {
  setRightComponent
} = menuRightComponentSlice.actions;

export default menuRightComponentSlice.reducer;
