import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
    total_pages: null,
    total_results: null
};

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async (params, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(params);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {results, page, total_pages, total_results} = action.payload;
                state.page = page;
                state.total_pages = total_pages;
                state.total_results = total_results;
                state.movies = results;

                state.loading = false;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getMovies.pending, (state, action) => {
                state.loading = true;
            })

});

const {reducer: moviesReducer, actions: {}} = moviesSlice;

const moviesActions = {
    getMovies

};

export {
    moviesActions,
    moviesReducer

};