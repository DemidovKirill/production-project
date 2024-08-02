import React, { memo } from 'react';
import { AppLink } from 'shared/components/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';
import { SidebarLinkItem } from '../../models/sidebar-link-items';

interface SidebarLinkProps {
  link: SidebarLinkItem;
  collapsed: boolean;
}

export const SidebarLink = memo((props: SidebarLinkProps) => {
  const { t } = useTranslation();
  const { link, collapsed } = props;

  return (
    <AppLink
      className={classNames(style['sidebar-link'], { [style.collapsed]: collapsed }, [])}
      to={link.to}
      isSidebarCollapsed={collapsed}
    >
      <link.Icon />
      <span className={style['sidebar-link__title']}>{t(link.translateKey)}</span>
    </AppLink>
  );
});
