import { StoreSchema } from 'app/providers/Store';

export const getUserAuthData = (state: StoreSchema) => state.user.userData;
