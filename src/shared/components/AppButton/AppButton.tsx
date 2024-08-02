import {
  ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

export enum ButtonAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  ERROR = 'error',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  appearance?: ButtonAppearance[];
  disabled?: boolean;
  withHover?: boolean;
  children?: ReactNode;
}

export const AppButton = memo((props: AppButtonProps) => {
  const {
    appearance = [ButtonAppearance.PRIMARY],
    className,
    children,
    disabled,
    withHover,
    ...otherProps
  } = props;

  const mods = {
    [style.disabled]: disabled,
    [style['with-hover']]: withHover,
  };

  return (
    <button
      type="button"
      className={classNames(style['app-button'], mods, [
        className,
        ...appearance,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
