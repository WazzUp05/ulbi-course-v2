import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        text: 'Text',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
