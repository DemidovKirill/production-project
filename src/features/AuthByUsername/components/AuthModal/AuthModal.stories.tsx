import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
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
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};