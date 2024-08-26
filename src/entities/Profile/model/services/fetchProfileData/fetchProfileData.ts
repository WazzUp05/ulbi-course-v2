import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile } from '../../types/profile';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchrofileData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
