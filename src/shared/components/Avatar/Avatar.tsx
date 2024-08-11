import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  CSSProperties, memo, useMemo,
} from 'react';
import style from './style.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    src, alt = 'user avatar', size, className,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 128,
    height: size || 128,
    lineHeight: `${size}px` || '128px',
  }), [size]);

  return (
    <img
      className={classNames(style.avatar, {}, [className])}
      style={styles}
      src={src}
      alt={alt}
    />
  );
});
