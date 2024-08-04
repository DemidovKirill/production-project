import { StoreSchema } from 'app/providers/Store';

export const getUserProfileError = (state: StoreSchema) => state?.profile?.error;
