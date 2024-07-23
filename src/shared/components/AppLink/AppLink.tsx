import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LinkProps, NavLink } from 'react-router-dom';
import style from './style.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  theme?: string
  className?: string;
  isSidebarCollapsed?: boolean
}

export const AppLink: FunctionComponent<AppLinkProps> = (props) => {
  const {
    to, theme = AppLinkTheme.PRIMARY, isSidebarCollapsed, className, children, ...otherProps
  } = props;

  const classNamesForLink = classNames(style['app-link'], { isSidebarCollapsed }, [className, style[theme]]);

  return (
    <NavLink
      className={({ isActive }) => (isActive ? `${classNamesForLink} active` : classNamesForLink)}
      to={to}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
