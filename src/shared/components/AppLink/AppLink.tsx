import { FunctionComponent } from 'react';
import { classNames } from "shared/lib/classNames";
import style from './style.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  theme?: string
  className?: string;
}

const AppLink: FunctionComponent<AppLinkProps> = props => {
  const { to, theme = AppLinkTheme.PRIMARY, className, children, ...otherProps} = props;

  return (
    <Link
      className={classNames(style.appLink, {}, [className, style[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
