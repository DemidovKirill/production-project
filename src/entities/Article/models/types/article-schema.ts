import { ArticleStructure } from './article';

export interface ArticleSchema {
  isLoading: boolean;
  error?: string;
  articleData: ArticleStructure | null;
}
