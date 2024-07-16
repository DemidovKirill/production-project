import { useTranslation } from 'react-i18next';
import style from './style.module.scss';

function AboutPage() {
  const { t } = useTranslation('about-page-translation');

  return (
    <div className={style['about-page']}>
      {t('aboutPage')}
    </div>
  );
}

export default AboutPage;
