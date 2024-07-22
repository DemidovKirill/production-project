import { useTranslation } from 'react-i18next';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

const BugButton = () => {
  const { t } = useTranslation('main-page-translation');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const throwError = () => {
    setError(true);
  };

  return (
    <AppButton
      onClick={throwError}
      className={classNames(style['bug-button'], {}, [])}
      appearance={[ButtonAppearance.ERROR, ButtonAppearance.OUTLINED, ButtonAppearance.CLEAR]}
    >
      {t('createError')}
    </AppButton>
  );
};

export default BugButton;
