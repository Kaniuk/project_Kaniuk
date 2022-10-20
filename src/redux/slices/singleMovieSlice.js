import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    singleMovie: null,
    loading: false,
    error: null
};

const getMovieById = createAsyncThunk(
    'singleMovieSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const singleMovieSlice = createSlice({
    name: 'singleMovieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.singleMovie = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(getMovieById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getMovieById.pending, (state, action) => {
                state.loading = true;
            })

});

const {reducer: singleMovieReducer, actions: {}} = singleMovieSlice;

const singleMoviesActions = {
    getMovieById
};

export {
    singleMovieReducer,
    singleMoviesActions
};