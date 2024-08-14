import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValidateProfileDataError } from 'pages/ProfilePage';
import { ProfileData } from '../types/profile-data';
import { ProfileSchema } from '../types/profile-schema';
import { fetchProfileData } from '../services/fetchProfileDataAsyncThunk/fetchProfileDataAsyncThunk';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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
    setReadonly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state: ProfileSchema, action: PayloadAction<ProfileData>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    cancelProfileEditing: (state: ProfileSchema) => {
      state.formData = state.profileData;
      state.readonly = true;
      state.validateErrors = [];
    },
  },
  extraReducers: (builder) => {
    // @ts-ignore
    builder
      // FETCH PROFILE DATA
      .addCase(fetchProfileData.pending, (state: ProfileSchema) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state: ProfileSchema, action: PayloadAction<ProfileData>) => {
        state.isLoading = false;
        state.error = null;
        state.profileData = action.payload;
        state.formData = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state: ProfileSchema, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // UPDATE PROFILE DATA
      .addCase(updateProfileData.pending, (state: ProfileSchema) => {
        state.isLoading = true;
        state.validateErrors = [];
      })
      .addCase(updateProfileData.fulfilled, (state: ProfileSchema, action: PayloadAction<ProfileData>) => {
        state.isLoading = false;
        state.validateErrors = [];
        state.readonly = true;
        state.profileData = action.payload;
        state.formData = action.payload;
      })
      .addCase(updateProfileData.rejected, (
        state: ProfileSchema,
        action: PayloadAction<ValidateProfileDataError[]>,
      ) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
