import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import(/* webpackChunkName: "main_page" */'./MainPage')), 1500);
}));
