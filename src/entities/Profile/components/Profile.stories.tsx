import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import { StoreDecorator } from 'shared/config/storybook/decorators/store-decorator';
import { Currency } from 'shared/constants/currency';
import { Country } from 'shared/constants/country';
import { Profile } from './Profile';

const meta = {
  title: 'entities/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightIsLoading: Story = {
  args: {},
};
LightIsLoading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    profileData: null, isLoading: true, readonly: true, error: null,
  },
})];

export const DarkIsLoading: Story = {
  args: {},
};
DarkIsLoading.decorators = [StoreDecorator({
  profile: {
    profileData: null, isLoading: true, readonly: true, error: null,
  },
})];

export const LightError: Story = {
  args: {},
};
LightError.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    profileData: null, isLoading: false, readonly: true, error: 'Error',
  },
})];

export const DarkError: Story = {
  args: {},
};
DarkError.decorators = [StoreDecorator({
  profile: {
    profileData: null, isLoading: false, readonly: true, error: 'Error',
  },
})];

export const LightReadonlyFalse: Story = {
  args: {},
};
LightReadonlyFalse.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    profileData: null, isLoading: false, readonly: false, error: null,
  },
})];

export const DarkReadonlyFalse: Story = {
  args: {},
};
DarkReadonlyFalse.decorators = [StoreDecorator({
  profile: {
    profileData: null, isLoading: false, readonly: false, error: null,
  },
})];

export const LightFullData: Story = {
  args: {},
};
LightFullData.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
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
    isLoading: false,
    readonly: true,
    error: null,
  },
})];

export const DarkFullData: Story = {
  args: {},
};
DarkFullData.decorators = [StoreDecorator({
  profile: {
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
    isLoading: false,
    readonly: true,
    error: null,
  },
})];
