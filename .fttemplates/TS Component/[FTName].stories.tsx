import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { [FTName] } from './[FTName]';

const meta = {
    title: 'shared/[FTName]',
    component: [FTName],
} satisfies Meta<typeof [FTName]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
};

