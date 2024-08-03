import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_DATA_KEY } from 'shared/constants/local-storage-keys';
import { ThunkConfig } from 'app/providers/Store';

interface AuthByUsernameProps {
  username: string;
  password: string;
}

export const authByUsernameAsyncThunk = createAsyncThunk<User, AuthByUsernameProps, ThunkConfig<string>>(
  'auth/authByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post('/login', authData);
      if (!response?.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_USER_DATA_KEY, JSON.stringify(response.data));
      dispatch(userActions.setUserData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue('Incorrect Auth data');
    }
  },
);
