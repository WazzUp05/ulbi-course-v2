import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { CommentList } from './CommentList';

const meta = {
    title: 'shared/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
};

