import { StoreSchema } from 'app/providers/Store';

export const getUserProfileReadonly = (state: StoreSchema) => state?.profile?.readonly;
