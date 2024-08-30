import { createSlice } from "@reduxjs/toolkit";

export const ColorSlice = createSlice({
  name: "color",
  initialState: {
    color: true,
  },
  reducers: {
    chage:(state)=>{
        state.color = !state.color
        
        
    }
  }
});

export const {chage} = ColorSlice.actions

export default ColorSlice.reducer