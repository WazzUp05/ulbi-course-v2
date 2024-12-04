import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta = {
    title: 'shared/Card',
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title="Title" text="Text" />,
    },
};
