import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Store';
import { ProfileData } from '../../types/profile-data';

export const fetchProfileData = createAsyncThunk<ProfileData, void, ThunkConfig<string>>(
  'profile/getUserProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<ProfileData>('/profile');

      return response.data;
    } catch (error) {
      return rejectWithValue('Incorrect Auth data');
    }
  },
);
