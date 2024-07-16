import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style['not-found'])}>
      {t('notFound')}
    </div>
  );
};
