import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: 'text',
            user: {
                id: '1',
                username: 'user',
                avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
            },
        },
    },
};

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'text',
            user: {
                id: '1',
                username: 'user',
                avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
            },
        },
        isLoading: true,
    },
};
