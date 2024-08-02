import { useTranslation } from 'react-i18next';
import { ReducerList, useLazyReducerImports } from 'shared/lib/hooks/useLazyReducerImport';
import { profileReducer } from 'entities/Profile';
import style from './style.module.scss';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile-page-translation');
  useLazyReducerImports(reducerList);

  return (
    <div className={style['profile-page']}>
      {t('profilePage')}
    </div>
  );
};

export default ProfilePage;
