import { ButtonHTMLAttributes, FunctionComponent } from 'react';
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
}

export const AppButton: FunctionComponent<AppButtonProps> = (props) => {
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
};
