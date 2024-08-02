import { useTranslation } from 'react-i18next';
import style from './style.module.scss';

const ProfilePage = () => {
  const { t } = useTranslation('profile-page-translation');

  return (
    <div className={style['profile-page']}>
      {t('profilePage')}
    </div>
  );
};

export default ProfilePage;
