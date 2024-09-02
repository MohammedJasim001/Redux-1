import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchApi = createAsyncThunk('fetchApi',async()=>{

    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data.data

})

const  thunkSlice = createSlice({
    name:'apiCall',
    initialState:{
        isLoading:false,
        data:[],
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.data=action.payload
            state.isLoading=false
        })
        builder.addCase(fetchApi.rejected,(state,action)=>{
            state.error=true
        })

    }
})
export default thunkSlice.reducer