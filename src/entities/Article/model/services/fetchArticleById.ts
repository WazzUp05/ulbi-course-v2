import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from '../types/article';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchProfileData',
    async (articleId, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
