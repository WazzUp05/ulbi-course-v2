import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { username: 'admin', password: 'admin' } })],
};

export const WithError: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { username: 'admin', password: 'admin', error: 'error' } })],
};

export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
};
