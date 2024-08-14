import { ReducerList, useLazyReducerImports } from 'shared/lib/hooks/useLazyReducerImport';
import { ProfileCard } from 'entities/ProfileCard';
import { useSelector } from 'react-redux';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import EditIcon from 'shared/assets/icon/edit.svg';
import SaveIcon from 'shared/assets/icon/save.svg';
import CloseIcon from 'shared/assets/icon/close.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { updateProfileData } from 'pages/ProfilePage';
import { Avatar } from 'shared/components/Avatar/Avatar';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import {
  getUserProfileValidateErrors,
} from 'pages/ProfilePage/models/selectors/getUserProfileValidateErrors/getUserProfileValidateErrors';
import { getUserProfileFormData } from '../models/selectors/getUserProfileFormData/getUserProfileFormData';
import { profileActions, profileReducer } from '../models/slice/profile.slice';
import { getUserProfileIsLoading } from '../models/selectors/getUserProfileIsLoading/getUserProfileIsLoading';
import { getUserProfileError } from '../models/selectors/getUserProfileError/getUserProfileError';
import { getUserProfileReadonly } from '../models/selectors/getUserProfileReadonly/getUserProfileReadonly';
import style from './style.module.scss';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  useLazyReducerImports(reducerList);
  const profileFormData = useSelector(getUserProfileFormData);
  const profileError = useSelector(getUserProfileError);
  const profileValidateErrors = useSelector(getUserProfileValidateErrors);
  const profileReadonly = useSelector(getUserProfileReadonly);
  const profileIsLoading = useSelector(getUserProfileIsLoading);
  const dispatch = useAppDispatch();

  const onEditButtonClick = () => {
    if (!profileError) {
      dispatch(profileActions.setReadonly(!profileReadonly));
    }
  };

  const onSaveButtonClick = () => {
    if (!profileError) {
      dispatch(updateProfileData());
    }
  };

  const onCancelButtonClick = () => {
    if (!profileError) {
      dispatch(profileActions.cancelProfileEditing());
    }
  };

  const onChangeFirstname = (value: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }));
  };
  const onChangeLastname = (value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  };
  const onChangeAge = (value: string) => {
    const validatedValue = value.replace(/\D+/gm, '');
    dispatch(profileActions.updateProfile({ age: Number(validatedValue) }));
  };
  const onChangeCity = (value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  };
  const onChangeUsername = (value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  };
  const onChangeAvatar = (value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  };
  const onChangeCurrency = (currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  };
  const onChangeCountry = (country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  };

  const getEditIcons = () => {
    if (!profileReadonly) {
      return (
        <div className={style['profile-page__edit-buttons']}>
          <AppButton
            className={style['profile-page__edit-button']}
            appearance={[ButtonAppearance.CLEAR]}
            onClick={onSaveButtonClick}
          >
            <SaveIcon className={style['profile-page__save-icon']} />
          </AppButton>
          <AppButton
            className={style['profile-page__edit-button']}
            appearance={[ButtonAppearance.CLEAR]}
            onClick={onCancelButtonClick}
          >
            <CloseIcon className={style['profile-page__cancel-icon']} />
          </AppButton>
        </div>
      );
    }

    return (
      <div className={style['profile-page__edit-buttons']}>
        <AppButton
          className={style['profile-page__edit-button']}
          appearance={[ButtonAppearance.CLEAR]}
          onClick={onEditButtonClick}
        >
          <EditIcon className={style['profile-page__edit-icon']} />
        </AppButton>
      </div>
    );
  };

  return (
    <div className={style['profile-page']}>
      <div className={style['profile-page__content']}>
        <header className={style['profile-page__header']}>
          <Avatar src={profileFormData?.avatar} alt={profileFormData?.avatar && 'Avatar'} size={128} />
          {getEditIcons()}
        </header>
        <ProfileCard
          profileData={profileFormData}
          readonly={profileReadonly}
          isLoading={profileIsLoading}
          error={profileError}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          errors={profileValidateErrors}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
