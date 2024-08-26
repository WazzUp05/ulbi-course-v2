import { ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: 'Russia',
    last: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: 'USD',
};

describe('validateProfile.test', () => {
    test('success', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const result = validateProfileData({ ...data, first: '', last: '' });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('incrorect age', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('incrorect country', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
    });

    test('incrorect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ]);
    });
});
