import { StoreSchema } from 'app/providers/Store';
import { authSchemaInitialState } from '../../slice/auth.slice';

export const getAuthIsLoading = (state: StoreSchema) => state?.auth?.isLoading || authSchemaInitialState.isLoading;
