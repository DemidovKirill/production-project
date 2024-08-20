import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/User';

const initialState: UserSchema = { userData: null, _isMounted: false };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state: UserSchema, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    initUserData: (state: UserSchema, action: PayloadAction<User>) => {
      state.userData = action.payload;
      state._isMounted = true;
    },
    logout: (state: UserSchema) => {
      state.userData = null;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
