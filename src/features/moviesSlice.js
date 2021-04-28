import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    recommended : null,
    newDisney : null,
    original : null,
    trending : null
};

const moviesSlice = createSlice({
    name : 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recomanded = action.payload.recomanded;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
})

export const {setMovies} = moviesSlice.actions;

export const selectRecommanded = (state) => state.movies.recomanded;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectOriginal = (state) => state.movies.original;
export const selectTrending = (state) => state.movies.trending;

export default  moviesSlice.reducer;