import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import ArticlesPage from './ArticlesPage';

const meta = {
  title: 'page/ArticlesPage',
  component: ArticlesPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
