import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockText } from '../../models/types/article';
import style from './style.module.scss';

interface ArticleBlockTextProps {
  className?: string;
  block: ArticleBlockText
}

export const ArticleBlockTextComponent = memo((props: ArticleBlockTextProps) => {
  const { block, className } = props;

  return (
    <section className={classNames(style.block, {}, [className])}>
      {block?.title && (<h3 className={style.block__title}>{block?.title}</h3>)}
      {block.paragraphs.map((text) => (
        <p key={text} className={style.block__text}>{text}</p>
      ))}
    </section>
  );
});
