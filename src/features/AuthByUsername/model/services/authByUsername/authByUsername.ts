import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { LOCAL_STORAGE_USER_DATA_KEY } from 'shared/constants/local-storage-keys';

interface AuthByUsernameProps {
  username: string;
  password: string;
}

export const authByUsernameAsyncThunk = createAsyncThunk<User, AuthByUsernameProps, {rejectValue: string}>(
  'auth/authByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_USER_DATA_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setUserData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Incorrect Auth data');
    }
  },
);
