import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
    title: 'shared/ArticleDetailsPage',
    component: ArticleDetailsPage,
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
