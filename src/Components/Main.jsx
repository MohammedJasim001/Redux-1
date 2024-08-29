import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import Color from './Folders/Color';
import Count from './Folders/Count';
import { useSelector } from 'react-redux';

const Main = () => {
    // const value = useSelector((state) => {
    //     return state.value;
    //   });
    //   const color = useSelector((state) => {
    //     return state.color;
    //   });
    //   console.log(value);
    
    //   const dispatch = useDispatch();
    const {value} = useSelector((state) => state.color);
    
      return (
        <div style={{background:value ? "yellow":"green"}}   className='h-[100vh] flex justify-center items-center'>
          {/* <div className="flex flex-col">
            <button className='bg-blue-500 p-2 rounded-md'
              onClick={() => {
                dispatch({
                  type: "increment",
                });
              }}
            >
              Increment
            </button>
    
            <label className='text-gray-800 text-4xl'>{value}</label>
            <button className='bg-blue-500 p-2 rounded-md'
              onClick={() => {
                dispatch({
                  type: "decrement",
                });
              }}
            >
              Decrement
            </button>
    
         <div className=' mt-5 flex flex-col gap-4'>
         <button className='bg-blue-500 p-2 rounded-md'
              onClick={() => {
                dispatch({
                  type: "green",
                });
              }}
            >
              Green
            </button>
    
            <button className='bg-blue-500 p-2 rounded-md'
              onClick={() => {
                dispatch({
                  type: "red",
                });
              }}
            >
              Red
            </button>
         </div>
          </div> */}

            <Color/>
            <Count/>
        </div>
      );
    };

export default Main
