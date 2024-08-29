import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Count/CountSlice";

const Count = () => {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment("i"));
        }}
        className="bg-blue-500 p-2 rounded-md"
      >
        Increment
      </button>

      <label>{value}</label>
      <button
      
        onClick={() => {
          dispatch(increment("d"));
        }}
        className="bg-blue-500 p-2 rounded-md"
      >
        Decrement
      </button>
      <button
    
        onClick={() => {
          dispatch(increment("hhh"));
        }}
        className="bg-blue-500 p-2 rounded-md"
      >
        Reset
      </button>
    </div>
  );
};

export default Count;
