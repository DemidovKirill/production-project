import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducerList, useLazyReducerImports } from 'shared/lib/hooks/useLazyReducerImport';
import { articleReducer } from 'entities/Article/models/slice/article.slice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from 'entities/Article/models/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetails,
  getArticleError,
  getArticleIsLoading,
} from 'entities/Article/models/selectors/articleDetails';
import { PageLoader } from 'widgets/PageLoader';
import style from './style.module.scss';

interface ArticleProps {
  className?: string;
  articleId: string;
}

const reducerList: ReducerList = {
  article: articleReducer,
};

export const Article = memo((props: ArticleProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation('article-translation');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetails);
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);

  useLazyReducerImports(reducerList);

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, [dispatch, articleId]);

  return (
    <section className={classNames(style.article, {}, [className])}>
      {isLoading && 'loading...'}
      {error && 'error'}
      {article && 'success'}
    </section>
  );
});
