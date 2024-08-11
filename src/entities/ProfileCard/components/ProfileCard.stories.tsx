import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { StoreDecorator } from 'shared/config/storybook/decorators/store-decorator';
import { Currency } from 'shared/constants/currency';
import { Country } from 'shared/constants/country';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightIsLoading: Story = {
  args: {
    isLoading: true,
  },
};
LightIsLoading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const DarkIsLoading: Story = {
  args: {
    isLoading: true,
  },
};
DarkIsLoading.decorators = [StoreDecorator({})];

export const LightError: Story = {
  args: {
    error: 'Error',
  },
};
LightError.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const DarkError: Story = {
  args: {
    error: 'Error',
  },
};
DarkError.decorators = [StoreDecorator({})];

export const LightReadonlyFalse: Story = {
  args: {
    readonly: false,
  },
};
LightReadonlyFalse.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const DarkReadonlyFalse: Story = {
  args: {
    readonly: false,
  },
};
DarkReadonlyFalse.decorators = [StoreDecorator({})];

export const LightFullData: Story = {
  args: {
    profileData: {
      firstname: 'Тимур',
      lastname: 'Ульби',
      age: 22,
      currency: Currency.RUB,
      country: Country.RUSSIA,
      city: 'Moscow',
      username: 'admin',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    readonly: true,
  },
};
LightFullData.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const DarkFullData: Story = {
  args: {
    profileData: {
      firstname: 'Тимур',
      lastname: 'Ульби',
      age: 22,
      currency: Currency.RUB,
      country: Country.RUSSIA,
      city: 'Moscow',
      username: 'admin',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    readonly: true,
  },
};
DarkFullData.decorators = [StoreDecorator({})];
