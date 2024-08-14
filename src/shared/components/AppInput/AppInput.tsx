import React, { InputHTMLAttributes, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'error'>;

interface AppInputProps extends HTMLInputProps{
  className?: string;
  type?: string;
  label?: string;
  autoFocus?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
  error?: string | null;
}

export const AppInput = memo((props: AppInputProps) => {
  const {
    value,
    onChange,
    className,
    type = 'text',
    label,
    autoFocus,
    error,
    ...other
  } = props;

  const [isFocused, setIsFocused] = useState(autoFocus);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const onInputFocus = () => {
    setIsFocused(true);
  };

  const onInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={classNames(style['app-input__wrapper'], {}, [className])}>
      {label && (
        <div className={style['app-input__label-wrapper']}>
          <span
            className={
              classNames(
                style['app-input__label'],
                { [style.focused]: isFocused },
                [className],
              )
            }
          >
            {label}
          </span>
          <span className={style['app-input__error']}>
            {error && error}
          </span>
        </div>
      )}
      <input
        className={classNames(style['app-input'], { [style.error]: !!error }, [className])}
        value={value}
        onChange={onInputChange}
        type={type}
        autoFocus={autoFocus}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        {...other}
      />
    </div>
  );
});
