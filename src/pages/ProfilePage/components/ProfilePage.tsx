import { useTranslation } from 'react-i18next';
import { ReducerList, useLazyReducerImports } from 'shared/lib/hooks/useLazyReducerImport';
import { profileReducer } from 'entities/Profile';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import EditIcon from 'shared/assets/icon/edit.svg';
import { AppInput } from 'shared/components/AppInput/AppInput';
import style from './style.module.scss';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile-page-translation');
  useLazyReducerImports(reducerList);

  return (
    <div className={style['profile-page']}>
      <div className={style['profile-page__content']}>
        <header className={style['profile-page__header']}>
          <img
            className={style['profile-page__avatar']}
            src="https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
            alt="Avatar"
          />
          <AppButton appearance={[ButtonAppearance.CLEAR]} className={style['profile-page__edit-button']}>
            <EditIcon className={style['profile-page__edit-icon']} />
          </AppButton>
        </header>
        <main className={style['profile-page__main']}>
          <AppInput disabled label={t('name')} type="text" placeholder="-" />
          <AppInput disabled label={t('nickname')} type="text" placeholder="-" />
          <AppInput disabled label={t('lastname')} type="text" placeholder="-" />
          <AppInput disabled label={t('avatarLink')} type="text" placeholder="-" />
          <AppInput disabled label={t('age')} type="text" placeholder="-" />
          <AppInput disabled label={t('currency')} type="text" placeholder="-" />
          <AppInput disabled label={t('city')} type="text" placeholder="-" />
          <AppInput disabled label={t('country')} type="text" placeholder="-" />
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
