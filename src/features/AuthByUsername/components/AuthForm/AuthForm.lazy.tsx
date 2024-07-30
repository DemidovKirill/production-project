import { lazy } from 'react';

export const AuthFormLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import(/* webpackChunkName: "auth_form" */'./AuthForm')), 1500);
}));
