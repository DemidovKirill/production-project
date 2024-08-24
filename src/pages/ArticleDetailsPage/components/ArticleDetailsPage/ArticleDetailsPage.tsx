import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article } from 'entities/Article';
import style from './style.module.scss';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details-page-translation');

  return (
    <div className={style['article-details-page']}>
      <Article />
    </div>
  );
};

export default memo(ArticleDetailsPage);
