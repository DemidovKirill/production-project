import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { StoreDecorator } from 'shared/config/storybook/decorators/store-decorator';
import { AuthModal } from './AuthModal';

const meta = {
  title: 'features/AuthModal',
  component: AuthModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    isOpen: true,
    container: document.body,
  },
} satisfies Meta<typeof AuthModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  auth: { username: 'admin', password: '123' },
})];

export const LightWithError: Story = {
  args: {},
};
LightWithError.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  auth: { username: 'admin', password: '123', error: 'Incorrect auth data' },
})];

export const LightPending: Story = {
  args: {},
};
LightPending.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  auth: { username: 'admin', password: '123', isLoading: true },
})];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [StoreDecorator({
  auth: { username: 'admin', password: '123' },
})];

export const DarkWithError: Story = {
  args: {},
};
DarkWithError.decorators = [StoreDecorator({
  auth: { username: 'admin', password: '123', error: 'Incorrect auth data' },
})];

export const DarkPending: Story = {
  args: {},
};
DarkPending.decorators = [StoreDecorator({
  auth: { username: 'admin', password: '123', isLoading: true },
})];
