import { lazy } from 'react';

export const ArticleDetailsPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import(/* webpackChunkName: "articles_details_page" */'./ArticleDetailsPage')), 1500);
}));
