import { StoreSchema } from 'app/providers/Store';

export const getAuthState = (state: StoreSchema) => state.auth;
