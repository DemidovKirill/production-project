import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import style from './style.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main-page-translation');

  return (
    <div className={style['main-page']}>
      {t('mainPage')}
      <BugButton />
    </div>
  );
};

export default MainPage;
