import React from 'react';
import { RoutePath } from 'shared/config/routerPathConfig';
import HomeLinkIcon from 'shared/assets/icon/links/home.svg';
import AboutLinkIcon from 'shared/assets/icon/links/about.svg';
import ProfileLinkIcon from 'shared/assets/icon/links/profile.svg';
import ArticlesLinkIcon from 'shared/assets/icon/links/articles.svg';

export interface SidebarLinkItem {
  to: string;
  translateKey: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
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
    authOnly: true,
  },
  {
    to: RoutePath.articles,
    translateKey: 'articlesPageLink',
    Icon: ArticlesLinkIcon,
    authOnly: true,
  },
];
