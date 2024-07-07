import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

// export const Outline: Story = {
//     args: {
//         children: 'Outline',
//         theme: ButtonTheme.OUTLINE,
//     },
// };
