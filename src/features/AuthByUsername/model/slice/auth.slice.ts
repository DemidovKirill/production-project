import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  authByUsernameAsyncThunk,
} from 'features/AuthByUsername/model/services/authByUsernameAsyncThunk/authByUsernameAsyncThunk';
import { AuthSchema } from '../types/auth-schema';

export const authSchemaInitialState: AuthSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
  rememberMe: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authSchemaInitialState,
  reducers: {
    setUsername: (state: AuthSchema, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state: AuthSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    // @ts-ignore
    builder
      .addCase(authByUsernameAsyncThunk.pending, (state: AuthSchema) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authByUsernameAsyncThunk.fulfilled, (state: AuthSchema) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authByUsernameAsyncThunk.rejected, (state: AuthSchema, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
