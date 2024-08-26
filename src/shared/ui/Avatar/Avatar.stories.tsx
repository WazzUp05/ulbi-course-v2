import type { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/tests/avatar.jpg';

import 'app/styles/index.scss';
import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: avatar,
        size: 150,
        alt: 'avatar',
    },
};

export const Small: Story = {
    args: {
        src: avatar,
        size: 50,
        alt: 'avatar',
    },
};
