import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: ThemeButton.CLEAR,
    },
};

// export const Outline: Story = {
//     args: {
//         children: 'Clear',
//         theme: ThemeButton.OUTLINE,
//     },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
