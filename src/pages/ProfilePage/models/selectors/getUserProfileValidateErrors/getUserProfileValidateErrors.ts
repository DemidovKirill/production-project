import { StoreSchema } from 'app/providers/Store';

export const getUserProfileValidateErrors = (state: StoreSchema) => state?.profile?.validateErrors;
