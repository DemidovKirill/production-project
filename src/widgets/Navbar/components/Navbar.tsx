import React, {FunctionComponent} from 'react';
import {classNames} from "shared/lib/classNames";
import style from './style.module.scss';
import AppLink, {AppLinkTheme} from "shared/components/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({className}) => {
  const {t} = useTranslation();

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>{t('mainPageLink')}</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('aboutPageLink')}</AppLink>
    </div>
  );
};
