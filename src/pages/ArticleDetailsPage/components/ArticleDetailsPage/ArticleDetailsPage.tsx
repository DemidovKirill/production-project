import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article } from 'entities/Article';
import { useParams } from 'react-router-dom';
import style from './style.module.scss';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details-page-translation');
  const { articleId } = useParams<{ articleId: string }>();

  return (
    <div className={style['article-details-page']}>
      {
        articleId ? (
          <Article articleId={articleId} />
        ) : (
          t('articleNotFound')
        )
      }

    </div>
  );
};

export default memo(ArticleDetailsPage);
