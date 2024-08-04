import { FC, lazy } from 'react';

interface AuthFormProps {
  onSuccess?: () => void;
}

export const AuthFormLazy = lazy <FC<AuthFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import(/* webpackChunkName: "auth_form" */'./AuthForm')), 1500);
}));
