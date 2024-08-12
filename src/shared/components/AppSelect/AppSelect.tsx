import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import style from './style.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const AppSelect = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={style['app-select__option']}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  return (
    <div className={classNames(style['app-select__wrapper'], {}, [className])}>
      {label && (
        <span className={style['app-select__label']}>
          {label}
        </span>
      )}
      <select
        disabled={readonly}
        className={style['app-select']}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
