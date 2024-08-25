import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleStructure } from 'entities/Article';
import { fetchArticleById } from 'entities/Article/models/services/fetchArticleById/fetchArticleById';
import { ArticleSchema } from '../types/article-schema';

const initialState: ArticleSchema = { isLoading: false, error: undefined, articleData: null };

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state: ArticleSchema) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (state: ArticleSchema, action: PayloadAction<ArticleStructure>) => {
        state.isLoading = false;
        state.error = undefined;
        state.articleData = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state: ArticleSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
