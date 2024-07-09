import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import 'app/styles/index.scss';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text modal',
        isOpen: true,
    },
};
