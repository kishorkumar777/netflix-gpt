import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
     name: 'gpt',
     initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null,
     },
     reducers:{
        toogleGptSearch : (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state, action)=>{
          const {movieNames, movieResults} = action.payload;
          state.movieNames = movieNames;
          state.movieResults = movieResults;
        }
     }
})

export const {toogleGptSearch, addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;