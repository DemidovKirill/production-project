import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { StoreDecorator } from 'shared/config/storybook/decorators/store-decorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt?',
    container: document.body,
    isOpen: true,
  },
  decorators: StoreDecorator({ user: { userData: { id: '1', username: 'admin' } } }),
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
