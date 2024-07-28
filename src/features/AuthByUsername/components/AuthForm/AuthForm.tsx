import { AppButton } from 'shared/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import style from './style.module.scss';

const AuthForm = () => {
  const { t } = useTranslation();

  return (
    <div className={style['auth-form']}>
      <input type="text" />
      <input type="text" />
      <AppButton>{t('signIn')}</AppButton>
    </div>
  );
};

export default AuthForm;
