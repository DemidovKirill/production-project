import { ReducerList, useLazyReducerImports } from 'shared/lib/hooks/useLazyReducerImport';
import { ProfileCard } from 'entities/ProfileCard';
import { useSelector } from 'react-redux';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import EditIcon from 'shared/assets/icon/edit.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions, profileReducer } from '../models/slice/profile.slice';
import { getUserProfileIsLoading } from '../models/selectors/getUserProfileIsLoading/getUserProfileIsLoading';
import { getUserProfileData } from '../models/selectors/getUserProfileData/getUserProfileData';
import { getUserProfileError } from '../models/selectors/getUserProfileError/getUserProfileError';
import { getUserProfileReadonly } from '../models/selectors/getUserProfileReadonly/getUserProfileReadonly';
import style from './style.module.scss';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  useLazyReducerImports(reducerList);
  const profileData = useSelector(getUserProfileData);
  const profileError = useSelector(getUserProfileError);
  const profileReadonly = useSelector(getUserProfileReadonly);
  const profileIsLoading = useSelector(getUserProfileIsLoading);
  const dispatch = useAppDispatch();

  const onEditButtonClick = () => {
    if (!profileError) {
      dispatch(profileActions.setReadonly(!profileReadonly));
    }
  };

  return (
    <div className={style['profile-page']}>
      <div className={style['profile-page__content']}>
        <header className={style['profile-page__header']}>
          {profileData?.avatar ? (
            <img
              className={style['profile-page__avatar']}
              src={profileData?.avatar}
              alt="Avatar"
            />
          ) : (
            <div className={style['profile-page__avatar']} />
          )}
          <AppButton
            className={style['profile-page__edit-button']}
            appearance={[ButtonAppearance.CLEAR]}
            onClick={onEditButtonClick}
          >
            <EditIcon
              className={
                classNames(
                  style['profile-page__edit-icon'],
                  { [style['profile-page__edit-icon_editable']]: !profileReadonly },
                  [],
                )
              }
            />
          </AppButton>
        </header>
        <ProfileCard
          profileData={profileData}
          readonly={profileReadonly}
          isLoading={profileIsLoading}
          error={profileError}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
