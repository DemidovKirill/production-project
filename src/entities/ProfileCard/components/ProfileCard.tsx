import { AppInput } from 'shared/components/AppInput/AppInput';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchProfileData, ProfileData, ValidateProfileDataError } from 'pages/ProfilePage';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
import { Currency, CurrencySelect } from 'entities/CurrencySelect';
import { Country, CountrySelect } from 'entities/CountrySelect';
import style from './style.module.scss';

interface ProfileCardProps {
  profileData?: ProfileData | null;
  error?: string | null;
  isLoading?: boolean;
  readonly?: boolean;
  // Change Functions
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  errors?: ValidateProfileDataError[];
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    profileData,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    errors,
  } = props;
  const { t } = useTranslation('profile-translation');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT_TYPE__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={classNames(style['profile-card'], {}, [style['profile-card__loading']])}>
        <PageLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(style['profile-card'], {}, [style['profile-card__error']])}>
        <h1 className={style['profile-card__error-title']}>{t('ops')}</h1>
        <span className={style['profile-card__error-subtitle']}>{t('reloadPage')}</span>
      </div>
    );
  }

  const getInputError = (error: ValidateProfileDataError): string | null => {
    if (errors?.includes(error)) {
      return t(error);
    }

    return null;
  };

  return (
    <div className={style['profile-card']}>
      <AppInput
        disabled={readonly}
        label={t('firstname')}
        value={profileData?.firstname}
        autoFocus={!readonly}
        onChange={onChangeFirstname}
        error={getInputError(ValidateProfileDataError.INCORRECT_USER_NAME)}
      />
      <AppInput
        disabled={readonly}
        label={t('lastname')}
        value={profileData?.lastname}
        onChange={onChangeLastname}
        error={getInputError(ValidateProfileDataError.INCORRECT_USER_LASTNAME)}
      />
      <AppInput
        disabled={readonly}
        label={t('age')}
        value={profileData?.age}
        onChange={onChangeAge}
        error={getInputError(ValidateProfileDataError.INCORRECT_AGE)}
      />
      <AppInput
        disabled={readonly}
        label={t('city')}
        value={profileData?.city}
        onChange={onChangeCity}
      />
      <AppInput
        disabled={readonly}
        label={t('username')}
        value={profileData?.username}
        onChange={onChangeUsername}
      />
      <AppInput
        disabled={readonly}
        label={t('avatar')}
        value={profileData?.avatar}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        value={profileData?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        value={profileData?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </div>
  );
});
