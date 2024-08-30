import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    text: "",
  },
  reducers: {
    inputTodo: (state, action) => {
      state.text = action.payload;
      console.log(action.payload);
    },
    addTodo: (state, action) => {
        if(state.text.trim()){
      state.todos=[...state.todos,state.text]
      console.log(state.todos);
      state.text = "";
        }
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});
export const { inputTodo, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
