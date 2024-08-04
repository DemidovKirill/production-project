import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileData } from '../types/profile-data';
import { ProfileSchema } from '../types/profile-schema';
import { fetchProfileData } from '../services/fetchProfileDataAsyncThunk/fetchProfileDataAsyncThunk';

export const profileInitialState: ProfileSchema = {
  profileData: null,
  isLoading: false,
  error: null,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    toggleReadonly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state: ProfileSchema) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state: ProfileSchema, action: PayloadAction<ProfileData>) => {
        state.isLoading = false;
        state.error = null;
        state.profileData = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state: ProfileSchema, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
