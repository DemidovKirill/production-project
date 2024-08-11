import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Store';
import { getUserProfileFormData } from '../../selectors/getUserProfileFormData/getUserProfileFormData';
import { ProfileData } from '../../types/profile-data';

export const updateProfileData = createAsyncThunk<ProfileData, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    try {
      const newProfileData = getUserProfileFormData(getState());
      const response = await extra.api.put<ProfileData>('/profile', newProfileData);

      return response.data;
    } catch (error) {
      return rejectWithValue('Incorrect Auth data');
    }
  },
);
