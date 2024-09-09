import { type StoryFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) => {
        return (
            <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                <StoryComponent />
            </StoreProvider>
        );
    };
