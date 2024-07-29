import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { StoreDecorator } from 'shared/config/storybook/decorators/store-decorator';
import { Navbar } from './Navbar';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSingIn: Story = {
  args: {},
};
LightSingIn.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  user: { userData: null },
})];
export const LightSingOut: Story = {
  args: {},
};
LightSingOut.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  user: { userData: { id: '1', username: 'admin' } },
})];

export const DarkSignIn: Story = {
  args: {},
};
DarkSignIn.decorators = [StoreDecorator({
  user: { userData: null },
})];

export const DarkSignOut: Story = {
  args: {},
};
DarkSignOut.decorators = [StoreDecorator({
  user: { userData: { id: '1', username: 'admin' } },
})];
