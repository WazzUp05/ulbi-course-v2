import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import 'app/styles/index.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'ClearInverted',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'OutlineSizeL',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXl: Story = {
    args: {
        children: 'OutlineSizeXl',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'BackgroundTheme',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'BackgroundInvertedTheme',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
