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
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    profileData, error, isLoading, readonly,
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
      {profileData && Object.keys(profileData).map((key, index) => (
        <AppInput
          disabled={readonly}
          label={t(key.toLowerCase())}
          value={profileData[key as ProfileDataKeys] || '-'}
          key={profileData[key as ProfileDataKeys]?.toString()}
          autoFocus={(index === 0 && !readonly)}
        />
      ))}
    </div>
  );
});
