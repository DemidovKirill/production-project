import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className, height, width, borderRadius,
  } = props;
  const styles: CSSProperties = {
    width: width || '100%',
    height: height || '100%',
    borderRadius: borderRadius || '10px',
  };

  return (
    <section
      className={classNames(style.skeleton, {}, [className])}
      style={styles}
    />
  );
});
