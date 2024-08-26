import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/avatar.jpg';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    country: 'Russia',
                    last: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    currency: 'USD',
                    avatar,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    country: 'Russia',
                    last: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    currency: 'USD',
                    avatar,
                },
            },
        }),
    ],
};
