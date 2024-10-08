import { StoreSchema } from 'app/providers/Store';
import { authSchemaInitialState } from '../../slice/auth.slice';

export const getAuthState = (state: StoreSchema) => state?.auth || authSchemaInitialState;
