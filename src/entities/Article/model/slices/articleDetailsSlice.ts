import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';
import { type Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        setArticleDetailsData: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = undefined;
        },

        clearArticleDetailsData: (state) => {
            state.data = undefined;
        },

        updateArticleDetailsData: (state, action) => {
            state.data = state.data ? { ...state.data, ...action.payload } : state.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
