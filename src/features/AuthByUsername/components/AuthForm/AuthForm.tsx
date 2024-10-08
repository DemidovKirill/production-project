import { AppButton } from 'shared/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/components/AppInput/AppInput';
import { useSelector } from 'react-redux';
import { authActions, authReducer } from 'features/AuthByUsername';
import { memo } from 'react';
import { ReducerList, useLazyReducerImports } from 'shared/lib/hooks/useLazyReducerImport';
import {
  authByUsernameAsyncThunk,
} from 'features/AuthByUsername/model/services/authByUsernameAsyncThunk/authByUsernameAsyncThunk';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getAuthUsername } from '../../model/selectors/getAuthUsername/getAuthUsername';
import { getAuthPassword } from '../../model/selectors/getAuthPassword/getAuthPassword';
import { getAuthIsLoading } from '../../model/selectors/getAuthIsLoading/getAuthIsLoading';
import { getAuthError } from '../../model/selectors/getAuthError/getAuthError';
import style from './style.module.scss';

interface AuthFormProps {
  onSuccess?: () => void;
}

const reducerList: ReducerList = {
  auth: authReducer,
};

const AuthForm = memo((props: AuthFormProps) => {
  const { onSuccess } = props;
  const { t } = useTranslation();
  const username = useSelector(getAuthUsername);
  const password = useSelector(getAuthPassword);
  const isLoading = useSelector(getAuthIsLoading);
  const error = useSelector(getAuthError);
  const dispatch = useAppDispatch();

  useLazyReducerImports(reducerList);

  const onUsernameChange = (value: string) => {
    dispatch(authActions.setUsername(value));
  };

  const onPasswordChange = (value: string) => {
    dispatch(authActions.setPassword(value));
  };

  const onSignInClick = async () => {
    const result = await dispatch(authByUsernameAsyncThunk({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
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
      <AppButton disabled={isLoading} withHover onClick={onSignInClick}>{t('signIn')}</AppButton>
    </div>
  );
});

export default AuthForm;
