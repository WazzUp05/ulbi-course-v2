import { type StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
