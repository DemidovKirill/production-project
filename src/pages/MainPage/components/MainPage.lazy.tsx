import { lazy } from "react";

export const MainPageLazy = lazy(() => import(/* webpackChunkName: "main_page"*/'./MainPage'));