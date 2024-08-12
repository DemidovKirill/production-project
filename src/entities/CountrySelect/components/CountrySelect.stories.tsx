import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { CountrySelect } from './CountrySelect';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {};
