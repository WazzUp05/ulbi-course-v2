import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'name',
                password: '',
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual('name');
    });
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual('');
    });
});
