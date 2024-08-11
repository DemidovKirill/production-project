import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { StoreDecorator } from 'shared/config/storybook/decorators/store-decorator';
import { profileInitialState } from '../models/slice/profile.slice';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'page/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ profile: profileInitialState })];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [StoreDecorator({ profile: profileInitialState })];
