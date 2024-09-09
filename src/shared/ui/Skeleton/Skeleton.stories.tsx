import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: '50%',
    },
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: '50%',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
