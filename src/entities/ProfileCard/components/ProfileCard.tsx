import { AppInput } from 'shared/components/AppInput/AppInput';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchProfileData, ProfileData, ProfileDataKeys } from 'pages/ProfilePage';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
import style from './style.module.scss';

interface ProfileCardProps {
  profileData?: ProfileData | null;
  error?: string | null;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: string) => void;
  onChangeCountry?: (value: string) => void;
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
  } = props;
  const { t } = useTranslation('profile-translation');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
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

  return (
    <div className={style['profile-card']}>
      <AppInput
        disabled={readonly}
        label={t('firstname')}
        value={profileData?.firstname || '-'}
        autoFocus={!readonly}
        onChange={onChangeFirstname}
      />
      <AppInput
        disabled={readonly}
        label={t('lastname')}
        value={profileData?.lastname || '-'}
        onChange={onChangeLastname}
      />
      <AppInput
        disabled={readonly}
        label={t('age')}
        value={profileData?.age || '-'}
        onChange={onChangeAge}
      />
      <AppInput
        disabled={readonly}
        label={t('city')}
        value={profileData?.city || '-'}
        onChange={onChangeCity}
      />
      <AppInput
        disabled={readonly}
        label={t('username')}
        value={profileData?.username || '-'}
        onChange={onChangeUsername}
      />
      <AppInput
        disabled={readonly}
        label={t('avatar')}
        value={profileData?.avatar || '-'}
        onChange={onChangeAvatar}
      />
      <AppInput
        disabled={readonly}
        label={t('currency')}
        value={profileData?.currency || '-'}
        onChange={onChangeCurrency}
      />
      <AppInput
        disabled={readonly}
        label={t('country')}
        value={profileData?.country || '-'}
        onChange={onChangeCountry}
      />
    </div>
  );
});
