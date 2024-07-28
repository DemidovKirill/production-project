import { AppButton } from 'shared/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/components/AppInput/AppInput';
import { useState } from 'react';
import style from './style.module.scss';

// interface AuthData {
//   username: string;
//   password: string;
// }

export const AuthForm = () => {
  const { t } = useTranslation();
  // const [authData, setAuthData] = useState<AuthData>({ username: '', password: '' });
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className={style['auth-form']}>
      <div className={style['auth-form__inputs']}>
        <AppInput autoFocus label="Username:" value={value} onChange={onChange} />
        <AppInput label="Password:" />
      </div>
      <AppButton>{t('signIn')}</AppButton>
    </div>
  );
};
