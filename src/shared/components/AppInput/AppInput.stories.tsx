import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { AppInput } from './AppInput';

const meta = {
  title: 'shared/AppInput',
  component: AppInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightWithLabel: Story = {
  args: {
    label: 'Label',
  },
};
LightWithLabel.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightWithFocus: Story = {
  args: { autoFocus: true },
};
LightWithFocus.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};

export const DarkWithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const DarkWithFocus: Story = {
  args: { autoFocus: true },
};
