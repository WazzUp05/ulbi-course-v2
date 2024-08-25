import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Label',
        options: [
            { content: 'Первый вариант', value: '1' },
            { content: 'Второй вариант', value: '2' },
        ],
    },
};
