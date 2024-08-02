import React from 'react';
import { RoutePath } from 'shared/config/routerPathConfig';
import HomeLinkIcon from 'shared/assets/icon/links/home.svg';
import AboutLinkIcon from 'shared/assets/icon/links/about.svg';
import ProfileLinkIcon from 'shared/assets/icon/links/profile.svg';

export interface SidebarLinkItem {
  to: string;
  translateKey: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarLinkItems: SidebarLinkItem[] = [
  {
    to: RoutePath.main,
    translateKey: 'mainPageLink',
    Icon: HomeLinkIcon,
  },
  {
    to: RoutePath.about,
    translateKey: 'aboutPageLink',
    Icon: AboutLinkIcon,
  },
  {
    to: RoutePath.profile,
    translateKey: 'profilePageLink',
    Icon: ProfileLinkIcon,
  },
];
