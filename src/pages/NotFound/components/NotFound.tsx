import { useTranslation } from 'react-i18next';
import style from './style.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style['not-found'])}>
      {t('notFound')}
    </div>
  );
};
