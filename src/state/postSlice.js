import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk("posts/fetchPosts", async(_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const res = await fetch("http://localhost:5000/posts");
        const data = await res.json();
        return data;

    }catch(error){
        rejectWithValue(error);
    }
});
const initialState = { records: [], loading: false, error: null };
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {

    [fetchData.fulfilled]:(state, action)=>{
        state.loading = false;
        state.error = null;
        state.records.push(...action.payload)
    },
    [fetchData.pending]:(state)=>{state.loading = true},
    [fetchData.rejected]:(state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },

    //deolete posts

    //add posts

  },
});



export default postSlice.reducer;
