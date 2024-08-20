import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'shared/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};

export const AuthNavbar: Story = {
    decorators: [StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } }), ThemeDecorator(Theme.DARK)],
};
