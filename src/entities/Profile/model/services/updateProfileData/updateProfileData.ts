import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileErrors, type Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfile/validateProfile';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra, getState } = thunkApi;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length > 0) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    }
);
