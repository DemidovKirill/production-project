import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Store';
import { ValidateProfileDataError } from 'pages/ProfilePage';
import { ProfileData } from '../../types/profile-data';

export const fetchProfileData = createAsyncThunk<ProfileData, void, ThunkConfig<string>>(
  'profile/getUserProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<ProfileData>('/profile');

      if (!response.data) {
        throw new Error(ValidateProfileDataError.SERVER_ERROR);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Incorrect Auth data');
    }
  },
);
