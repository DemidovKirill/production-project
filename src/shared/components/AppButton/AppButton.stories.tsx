import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { AppButton, ButtonAppearance } from './AppButton';

const meta = {
  title: 'shared/AppButton',
  component: AppButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    appearance: [ButtonAppearance.PRIMARY],
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    appearance: [ButtonAppearance.SECONDARY],
  },
};

export const Clear: Story = {
  args: {
    children: 'Button',
    appearance: [ButtonAppearance.CLEAR],
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    appearance: [ButtonAppearance.OUTLINED],
  },
};
