import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./Color/ColorSlice";
import CountSlice from "./Count/CountSlice";
import TodoSlice from "../Todo/TodoSlice";

const store= configureStore({
  reducer: {
    color: ColorSlice,
    value: CountSlice,
    todo: TodoSlice
  },
});
export default store
