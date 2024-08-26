import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import 'app/styles/index.scss';
import avatar from 'shared/assets/tests/avatar.jpg';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            country: 'Russia',
            last: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            currency: 'USD',
            avatar,
        },
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const withErrors: Story = {
    args: {
        error: 'error',
    },
};
