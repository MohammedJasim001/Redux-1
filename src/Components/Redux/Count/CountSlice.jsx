import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

const ConuntSlice = createSlice({
  name: "value",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return action.payload === "i"
        ? state + 1
        : action.payload === "d"
        ? state - 1
        : state = 0;
    },
   
  },
});
export const { increment, decrement } = ConuntSlice.actions;

export default ConuntSlice.reducer;
