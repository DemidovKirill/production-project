import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { StoreDecorator } from 'shared/config/storybook/decorators/store-decorator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { userData: {} } })];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [StoreDecorator({ user: { userData: {} } })];

export const NoAuth: Story = {
  args: {},
};
NoAuth.decorators = [StoreDecorator({})];
