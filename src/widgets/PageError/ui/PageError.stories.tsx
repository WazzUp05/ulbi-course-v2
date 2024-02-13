import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { PageError } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/PageError',
    component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

// export const Outline: Story = {
//     args: {
//         children: 'Outline',
//         theme: ThemeButton.OUTLINE,
//     },
// };
