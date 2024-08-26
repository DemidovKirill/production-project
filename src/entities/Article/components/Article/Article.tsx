import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducerList, useLazyReducerImports } from 'shared/lib/hooks/useLazyReducerImport';
import { articleReducer } from 'entities/Article/models/slice/article.slice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from 'entities/Article/models/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetails,
  getArticleIsLoading,
} from 'entities/Article/models/selectors/articleDetails';
import { ArticleHeader } from 'entities/Article/components/ArticleHeader/ArticleHeader';
import { Skeleton } from 'shared/components/Skeleton/Skeleton';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/models/types/article';
import {
  ArticleBlockTextComponent,
} from 'entities/Article/components/ArticleBlockTextComponent/ArticleBlockTextComponent';
import {
  ArticleBlockImageComponent,
} from 'entities/Article/components/ArticleBlockImageComponent/ArticleBlockImageComponent';
import style from './style.module.scss';

interface ArticleProps {
  className?: string;
  articleId: string;
}

const reducerList: ReducerList = {
  article: articleReducer,
};

const renderBlock = (blocks?: ArticleBlock[]) => {
  if (!blocks) {
    return null;
  }

  return blocks.map((block) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return (
        <ArticleBlockTextComponent key={block.id} block={block} />
      );
    case ArticleBlockType.CODE:
      return null;
    case ArticleBlockType.IMAGE:
      return (
        <ArticleBlockImageComponent key={block.id} block={block} />
      );
    default: return null;
    }
  });
};

export const Article = memo((props: ArticleProps) => {
  const { className, articleId } = props;
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetails);
  const isLoading = useSelector(getArticleIsLoading);
  // const isLoading = true;
  // const error = useSelector(getArticleError);

  useLazyReducerImports(reducerList);

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, [dispatch, articleId]);

  return (
    <section className={classNames(style.article, {}, [className])}>
      <ArticleHeader
        avatarLink="https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
        author="ULBI TV"
        data={article?.createdAt}
        isLoading={isLoading}
      />
      <main className={style.article__main}>
        <h1 className={style.article__title}>
          {isLoading ? <Skeleton height="80px" /> : article?.title}
        </h1>
        <h2 className={style.article__subtitle}>
          {isLoading ? <Skeleton height="32px" /> : article?.subtitle}
        </h2>
        {isLoading
          ? (
            <>
              <Skeleton height="480px" />
              <br />
              <Skeleton height="280px" />
            </>
          )
          : renderBlock(article?.blocks)}
      </main>
    </section>
  );
});
