import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./Color/ColorSlice";
import CountSlice from "./Count/CountSlice";

const store= configureStore({
  reducer: {
    color: ColorSlice,
    value: CountSlice
  },
});
export default store
