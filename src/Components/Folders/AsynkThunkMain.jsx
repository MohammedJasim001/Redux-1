import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../Redux/AsyncThunk/AsyncThunkSlice'

const AsynkThunkMain = () => {

    const data= useSelector((state)=>state.apiCall)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchApi())
    },[])
    console.log(data.data.slice(0,10));
    
  return (
    <div className='h-[100vh] bg-gray-400'>
        <div className='pt-10'>
        {
        data.isLoading?<h1>Loading....</h1>:
        data.data
        
        .slice(0, 10) 
        .map((todos, index) => (
          <p className=''
          key={index}>{todos.title}</p>
        ))
      
       
      }

        </div>
     
    </div>
  )
}

export default AsynkThunkMain
