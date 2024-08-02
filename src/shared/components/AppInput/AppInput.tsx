import React, { InputHTMLAttributes, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface AppInputProps extends HTMLInputProps{
  className?: string;
  type?: string;
  label?: string;
  autoFocus?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const AppInput = memo((props: AppInputProps) => {
  const {
    value, onChange, className, type = 'text', label, autoFocus, ...other
  } = props;
  const [isFocused, setIsFocused] = useState(autoFocus || false);

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
      )}
      <input
        className={style['app-input']}
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
