import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockImage } from '../../models/types/article';
import style from './style.module.scss';

interface ArticleBlockImageProps {
  className?: string;
  block: ArticleBlockImage
}

export const ArticleBlockImageComponent = memo((props: ArticleBlockImageProps) => {
  const { block, className } = props;

  return (
    <section className={classNames(style.block, {}, [className])}>
      <figure className={style.block__figure}>
        <img className={style.block__image} src={block.src} alt={block.title} />
        {block.title && <figcaption className={style.block__title}>{block.title}</figcaption>}
      </figure>

    </section>
  );
});
