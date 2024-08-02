import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { createReducerManager } from './reducer-manager';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;

  // LAZY
  auth?: AuthSchema;
  profile?: ProfileSchema;
}

export type ReducersKeys = keyof StoreSchema;

export type ReducerManager = ReturnType<typeof createReducerManager>;

export interface StoreWithReducerManager extends EnhancedStore<StoreSchema> {
  reducerManager: ReducerManager;
}
