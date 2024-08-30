import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    text: "",
    todos: [],
    edit:false
  },
  reducers: {
    inputTodo: (state, action) => {
      state.text = action.payload;
   
    },
    addTodo: (state, action) => {
        if(state.text.trim()){
      state.todos=[...state.todos,state.text]
      state.text = "";
        }
        else{
            alert('pls type something')
        }
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    editTodo:(state,action)=>{
     const forEdit= state.todos.filter((ele,ind)=>ind===action.payload)
      state.text=forEdit
      state.edit=action.payload
    },
    addEdit:(state,action)=>{
      state.todos[state.edit]=state.text
      state.edit=false
      state.text=''
    }
  },
});
export const { inputTodo, addTodo, deleteTodo , editTodo , addEdit} = todoSlice.actions;
export default todoSlice.reducer;
