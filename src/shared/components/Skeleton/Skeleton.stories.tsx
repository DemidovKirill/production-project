import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: { width: '250px', height: '250px' },
};

export const Light: Story = {
  args: { width: '250px', height: '250px' },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
