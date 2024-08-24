export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
  title?: string;
}

export interface ArticleBlockText extends ArticleBlockBase {
  paragraphs: string[];
  type: ArticleBlockType.TEXT
}

export interface ArticleBlockCode extends ArticleBlockBase {
  code: string;
  type: ArticleBlockType.CODE
}

export interface ArticleBlockImage extends ArticleBlockBase {
  src: string;
  type: ArticleBlockType.IMAGE
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage;

export interface ArticleStructure {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: Date;
  type: ArticleType[];
  blocks: ArticleBlock[]
}
