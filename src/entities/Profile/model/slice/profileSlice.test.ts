import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileErrors, type ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: 'Russia',
    last: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: 'USD',
};

describe('profileSlice.test', () => {
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123456' }))).toEqual({
            form: {
                username: '123456',
            },
        });
    });

    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            data,
            form: { username: '' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
            readonly: true,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
