import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'text',
                user: { id: '1', username: 'username' },
            },
            {
                id: '2',
                text: 'text',
                user: { id: '1', username: 'username' },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
