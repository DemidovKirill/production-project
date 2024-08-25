import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Store';
import { ValidateProfileDataError } from 'pages/ProfilePage';
import { ArticleStructure } from 'entities/Article';

export const fetchArticleById = createAsyncThunk<ArticleStructure, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<ArticleStructure>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error(ValidateProfileDataError.SERVER_ERROR);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Incorrect Auth data');
    }
  },
);
