import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/components/Code/Code';
import { ArticleBlockCode } from '../../models/types/article';
import style from './style.module.scss';

interface ArticleBlockCodeProps {
  className?: string;
  block: ArticleBlockCode
}

export const ArticleBlockCodeComponent = memo((props: ArticleBlockCodeProps) => {
  const { block, className } = props;

  return (
    <section className={classNames(style.block, {}, [className])}>
      {block?.title && <span className={style.block__title}>{block?.title}</span>}
      <Code text={block.code} />
    </section>
  );
});
