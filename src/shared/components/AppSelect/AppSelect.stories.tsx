import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { AppSelect } from './AppSelect';

const meta = {
  title: 'shared/AppSelect',
  component: AppSelect,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Select option',
    options: [
      { value: '1', content: 'One' },
      { value: '2', content: 'Two' },
    ],
  },
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {};
