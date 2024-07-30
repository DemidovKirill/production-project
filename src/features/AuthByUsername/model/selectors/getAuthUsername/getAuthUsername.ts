import { StoreSchema } from 'app/providers/Store';
import { authSchemaInitialState } from '../../slice/auth.slice';

export const getAuthUsername = (state: StoreSchema) => state?.auth?.username || authSchemaInitialState.username;
