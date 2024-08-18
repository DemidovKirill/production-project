import { StoreSchema } from 'app/providers/Store';

export const getUserProfileIsLoading = (state: StoreSchema) => state?.profile?.isLoading;
