import { type DeepPartial } from '@reduxjs/toolkit';
import { type Story } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    );
};
