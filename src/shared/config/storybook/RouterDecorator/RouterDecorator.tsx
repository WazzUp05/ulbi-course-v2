import { type StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => StoryFn) => {
    return <BrowserRouter>{story()}</BrowserRouter>;
};
