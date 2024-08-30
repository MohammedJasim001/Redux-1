import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEdit, addTodo, deleteTodo, editTodo, inputTodo } from "./TodoSlice";

const TodoMain = () => {
 
  const {todos,text,edit} = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="h-[100vh] flex flex-col items-center">
      <div className="">
        <input
          value={text}
          onChange={(e) => dispatch(inputTodo(e.target.value))}
          className="mt-10 w-[300px] h-10 border border-blue-950 p-3 rounded-md"
          type="text"
        />
        {edit===Number(edit)?<button onClick={() => dispatch(addEdit())}
            className="bg-red-600 p-2 w-20 rounded-md ml-3"
            >Edit
          </button>:<button onClick={() => dispatch(addTodo())}
            className="bg-red-600 p-2 w-20 rounded-md ml-3"
            >Add
          </button>}
      </div>
      <div>
        {todos.map((event,i)=>(
            <div className="flex mt-5"
                key={i}>
                <div  className=" w-[300px] h-10 border bg-blue-950 text-white p-2 rounded-md">
                    {event}
                </div>
                <button 
                className="bg-red-600 p-2 w-20 rounded-md ml-3"
                    onClick={()=>dispatch(deleteTodo())}
                  >Delete</button>
                  <button 
                className="bg-red-600 p-2 w-20 rounded-md ml-3"
                    onClick={()=>dispatch(editTodo(i))}
                  >Edit</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TodoMain;
