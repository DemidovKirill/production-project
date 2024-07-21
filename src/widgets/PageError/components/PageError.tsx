import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/components/AppButton/AppButton';
import style from './style.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError: FunctionComponent<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(style['page-error'], {}, [className])}>
      {t('pageError')}
      <AppButton onClick={reloadPage}>
        {t('reloadPage')}
      </AppButton>
    </div>
  );
};
