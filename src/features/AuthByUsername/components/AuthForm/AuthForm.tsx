import { AppButton } from 'shared/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/components/AppInput/AppInput';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from 'features/AuthByUsername';
import { memo } from 'react';
import { authByUsernameAsyncThunk } from '../../model/services/authByUsername/authByUsername';
import { getAuthState } from '../../model/selectors/getAuthState/getAuthState';
import style from './style.module.scss';

export const AuthForm = memo(() => {
  const { t } = useTranslation();
  const {
    username, password, isLoading, error,
  } = useSelector(getAuthState);
  const dispatch = useDispatch();

  const onUsernameChange = (value: string) => {
    dispatch(authActions.setUsername(value));
  };

  const onPasswordChange = (value: string) => {
    dispatch(authActions.setPassword(value));
  };

  const onSignInClick = () => {
    dispatch(authByUsernameAsyncThunk({ username, password }));
  };

  return (
    <div className={style['auth-form']}>
      <div className={style['auth-form__inputs']}>
        <AppInput autoFocus label={`${t('username')}:`} value={username} onChange={onUsernameChange} />
        <AppInput label={`${t('password')}:`} value={password} onChange={onPasswordChange} />
      </div>
      {error && (
        <div className={style['auth-form__error']}>
          {error}
        </div>
      )}
      <AppButton disabled={isLoading} onClick={onSignInClick}>{t('signIn')}</AppButton>
    </div>
  );
});
