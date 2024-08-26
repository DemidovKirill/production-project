import { useTranslation } from 'react-i18next';
import { AppSelect } from 'shared/components/AppSelect/AppSelect';
import { memo, useCallback } from 'react';
import { Country } from '../models/types/country';

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.CANADA, content: Country.CANADA },
  { value: Country.ENGLAND, content: Country.ENGLAND },
  { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(({
  value, onChange, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation('profile-translation');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <AppSelect
      label={t('country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
