import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import(/* webpackChunkName: "articles_page" */'./ArticlesPage')), 1500);
}));
