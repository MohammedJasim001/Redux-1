import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chage, change_color } from "../Redux/Color/ColorSlice";

const Color = () => {
  const {value} = useSelector((state) => state.color);
  const dispatch = useDispatch()

  
  return (
    <div  >
      <button 
        onClick={()=>dispatch(chage())}
        style={{background:value ? "green":"yellow" }} className=" p-2 rounded-md">Change Color</button>
    </div>
  );
};

export default Color;
