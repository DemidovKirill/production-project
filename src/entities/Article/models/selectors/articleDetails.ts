import { StoreSchema } from 'app/providers/Store';

export const getArticleDetails = (state: StoreSchema) => state?.article?.articleData;
export const getArticleIsLoading = (state: StoreSchema) => state?.article?.isLoading;
export const getArticleError = (state: StoreSchema) => state?.article?.error;
