import { StoreSchema } from 'app/providers/Store';

export const getCounter = (state: StoreSchema) => state.counter;
