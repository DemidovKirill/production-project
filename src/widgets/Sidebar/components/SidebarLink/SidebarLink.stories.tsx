import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme-decorator';
import { Theme } from 'shared/contexts/theme-context';
import HomeLinkIcon from 'shared/assets/icon/links/home.svg';
import { SidebarLink } from './SidebarLink';

const meta = {
  title: 'widget/SidebarLink',
  component: SidebarLink,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    link: { to: '/', translateKey: 'mainPageLink', Icon: HomeLinkIcon },
    collapsed: false,
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightCollapsed: Story = {
  args: {
    link: { to: '/', translateKey: 'mainPageLink', Icon: HomeLinkIcon },
    collapsed: true,
  },
};
LightCollapsed.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    link: { to: '/', translateKey: 'mainPageLink', Icon: HomeLinkIcon },
    collapsed: false,
  },
};

export const DarkCollapsed: Story = {
  args: {
    link: { to: '/', translateKey: 'mainPageLink', Icon: HomeLinkIcon },
    collapsed: true,
  },
};
