import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { ModalAuth } from './ModalAuth';

const meta = {
  title: 'shared/ModalAuth',
  component: ModalAuth,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt?',
    isOpen: true,
  },
} satisfies Meta<typeof ModalAuth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
