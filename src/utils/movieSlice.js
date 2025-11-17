import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState : {
      nowPlayingMovies : null,
      bgTrailerVideo : null,
      popularVideo: null,
      topRatedVideo: null,
    },
    reducers:{
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularVideo = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedVideo = action.payload;
        },
        addUpComingMovies : (state, action) => {
            state.upComingVideo = action.payload;
        },
        addTrailerVideo : (state, action) => {
           state.bgTrailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies} = movieSlice.actions;

export default movieSlice.reducer;