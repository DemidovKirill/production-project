import { useTranslation } from 'react-i18next';
import { AppSelect } from 'shared/components/AppSelect/AppSelect';
import { memo, useCallback } from 'react';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
  value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation('profile-translation');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <AppSelect
      label={t('currency')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
