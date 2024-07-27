import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import style from './style.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main-page-translation');

  return (
    <div className={style['main-page']}>
      {t('mainPage')}
      <BugButton />
      <br />
      <Counter />
    </div>
  );
};

export default MainPage;
