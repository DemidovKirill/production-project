import type { Meta, StoryObj } from '@storybook/react';
import { Article } from './Article';

const meta = {
  title: 'entities/Article',
  component: Article,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
