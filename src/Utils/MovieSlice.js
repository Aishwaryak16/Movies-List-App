import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailervideo: null,
        PopularMovies: null,
        topRatedMovie: null,
        upcomingMovie: null,
    },
    reducers: {
        addnowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addTrailerVideo: (state, action) => {
            state.trailervideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload;
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovie = action.payload;
        },
    }
});


export const {addnowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovie, addUpcomingMovie} = MovieSlice.actions;

export default MovieSlice.reducer;