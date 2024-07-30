import { StoreSchema } from 'app/providers/Store';
import { authSchemaInitialState } from '../../slice/auth.slice';

export const getAuthError = (state: StoreSchema) => state?.auth?.error || authSchemaInitialState.error;
