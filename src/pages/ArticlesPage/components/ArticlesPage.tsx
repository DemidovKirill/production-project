import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import style from './style.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('article-page-translation');

  return (
    <div className={style['article-page']}>
      {t('articlePage')}
    </div>
  );
};

export default memo(ArticlesPage);
