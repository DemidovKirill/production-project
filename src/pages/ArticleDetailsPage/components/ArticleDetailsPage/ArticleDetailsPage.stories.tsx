import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
  title: 'page/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
