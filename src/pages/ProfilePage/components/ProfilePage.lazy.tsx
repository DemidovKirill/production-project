import { lazy } from 'react';

export const ProfilePageLazy = lazy(() => import(/* webpackChunkName: "profile_page" */'./ProfilePage'));
