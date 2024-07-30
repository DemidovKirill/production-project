import { StoreSchema } from 'app/providers/Store';
import { authSchemaInitialState } from '../../slice/auth.slice';

export const getAuthPassword = (state: StoreSchema) => state?.auth?.password || authSchemaInitialState.password;
