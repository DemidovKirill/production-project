import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

export enum ButtonAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  CLEAR = 'clear',
  OUTLINED = 'outlined',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  appearance?: ButtonAppearance[];
}

export const AppButton: FunctionComponent<AppButtonProps> = (props) => {
  const {
    appearance = [ButtonAppearance.PRIMARY],
    className,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(style['app-button'], {}, [
        className,
        ...appearance,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
