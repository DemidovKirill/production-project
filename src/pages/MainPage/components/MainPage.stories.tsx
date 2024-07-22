import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import MainPage from './MainPage';

const meta = {
  title: 'page/MainPage',
  component: MainPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
