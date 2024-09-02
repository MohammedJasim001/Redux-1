import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./Color/ColorSlice";
import CountSlice from "./Count/CountSlice";
import TodoSlice from "../Todo/TodoSlice";
import AsyncThunkSlice from "./AsyncThunk/AsyncThunkSlice";

const store= configureStore({
  reducer: {
    color: ColorSlice,
    value: CountSlice,
    todo: TodoSlice,
    apiCall:AsyncThunkSlice
  },
});
export default store
