import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../index';

export const profileInitialState: ProfileSchema = {
  profileData: null,
  isLoading: false,
  error: null,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
