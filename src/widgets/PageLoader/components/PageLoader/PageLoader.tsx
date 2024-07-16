import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FunctionComponent<PageLoaderProps> = ({ className }) => (
  <div className={style['loader-wrapper']}>
    <div className={classNames(style.loader, {}, [className])} />
  </div>
);
