import { StoreSchema } from 'app/providers/Store';

export const getUserIsMounted = (state: StoreSchema) => state.user._isMounted;
