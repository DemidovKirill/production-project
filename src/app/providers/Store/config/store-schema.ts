import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'pages/ProfilePage';
import { AxiosInstance } from 'axios';
import { createReducerManager } from './reducer-manager';

export interface StoreSchema {
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

export interface ThunkExtraArguments {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArguments;
  state: StoreSchema;
}
