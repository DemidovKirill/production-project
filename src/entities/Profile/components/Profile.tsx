import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import EditIcon from 'shared/assets/icon/edit.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppInput } from 'shared/components/AppInput/AppInput';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  getUserProfileData,
} from '../models/selectors/getUserProfileData/getUserProfileData';
import {
  getUserProfileError,
} from '../models/selectors/getUserProfileError/getUserProfileError';
import {
  getUserProfileReadonly,
} from '../models/selectors/getUserProfileReadonly/getUserProfileReadonly';
import {
  profileActions,
} from '../models/slice/profile.slice';
import {
  fetchProfileData,
} from '../models/services/fetchProfileDataAsyncThunk/fetchProfileDataAsyncThunk';
import { ProfileDataKeys } from '../models/types/profile-data';
import style from './style.module.scss';

export const Profile: FunctionComponent = () => {
  const { t } = useTranslation('profile-translation');
  const dispatch = useAppDispatch();
  const profileData = useSelector(getUserProfileData);
  const profileReadonly = useSelector(getUserProfileReadonly);
  const profileError = useSelector(getUserProfileError);
  // const profileIsLoading = useSelector(getUserProfileIsLoading);

  const onEditButtonClick = () => {
    if (!profileError) {
      dispatch(profileActions.toggleReadonly(!profileReadonly));
    }
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={style.profile}>
      <header className={style.profile__header}>
        <img
          className={style.profile__avatar}
          src="https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
          alt="Avatar"
        />
        <AppButton
          className={style['profile__edit-button']}
          appearance={[ButtonAppearance.CLEAR]}
          onClick={onEditButtonClick}
        >
          <EditIcon
            className={
              classNames(
                style['profile__edit-icon'],
                { [style['profile__edit-icon_editable']]: !profileReadonly },
                [],
              )
            }
          />
        </AppButton>
      </header>
      <main className={style.profile__main}>
        {profileData && Object.keys(profileData).map((key: ProfileDataKeys) => (
          <AppInput
            disabled={profileReadonly}
            label={t(key.toLowerCase())}
            value={profileData[key].toString() || '-'}
            key={profileData[key].toString()}
          />
        ))}
      </main>
    </div>
  );
};
