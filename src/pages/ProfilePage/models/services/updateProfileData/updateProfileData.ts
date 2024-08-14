import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Store';
import { validateProfileData } from 'pages/ProfilePage/models/services/validateProfileData/validateProfileData';
import { ValidateProfileDataError } from 'pages/ProfilePage';
import { getUserProfileFormData } from '../../selectors/getUserProfileFormData/getUserProfileFormData';
import { ProfileData } from '../../types/profile-data';

export const updateProfileData = createAsyncThunk<ProfileData, void, ThunkConfig<ValidateProfileDataError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const newProfileData = getUserProfileFormData(getState());
    const errors = validateProfileData(newProfileData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<ProfileData>('/profile', newProfileData);

      return response.data;
    } catch (error) {
      return rejectWithValue([ValidateProfileDataError.SERVER_ERROR]);
    }
  },
);
