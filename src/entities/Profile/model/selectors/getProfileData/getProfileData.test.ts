import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: 'Russia',
            last: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: 'USD',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
