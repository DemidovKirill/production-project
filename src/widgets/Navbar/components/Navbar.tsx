import React, {FunctionComponent} from 'react';
import {classNames} from "shared/lib/classNames";
import style from './style.module.scss';
import AppLink, {AppLinkTheme} from "shared/components/AppLink/AppLink";

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>MAIN</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>ABOUT</AppLink>
    </div>
  );
};
