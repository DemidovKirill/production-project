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
}

export const AppButton: FunctionComponent<AppButtonProps> = (props) => {
  const {
    appearance = [ButtonAppearance.PRIMARY],
    className,
    children,
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(style['app-button'], { [style.disabled]: disabled }, [
        className,
        ...appearance,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
