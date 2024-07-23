import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({ className }) => (
  <div className={classNames(style.navbar, {}, [className])} />
);
