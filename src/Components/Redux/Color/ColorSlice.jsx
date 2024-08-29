import { createSlice } from "@reduxjs/toolkit";

export const ColorSlice = createSlice({
  name: "color",
  initialState: {
    value: true,
  },
  reducers: {
    chage:(state)=>{
        state.value = !state.value
        
        
    }
  }
});

export const {chage} = ColorSlice.actions

export default ColorSlice.reducer