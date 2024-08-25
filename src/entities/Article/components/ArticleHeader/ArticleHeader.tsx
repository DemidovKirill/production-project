import { memo } from 'react';
import { Avatar } from 'shared/components/Avatar/Avatar';
import { Skeleton } from 'shared/components/Skeleton/Skeleton';
import style from './style.module.scss';

interface ArticleHeaderProps {
  avatarLink: string;
  author: string;
  data?: Date;
  isLoading?: boolean;
}

export const ArticleHeader = memo((props: ArticleHeaderProps) => {
  const {
    avatarLink, author, data, isLoading,
  } = props;

  if (isLoading) {
    return (
      <header className={style.header}>
        <Skeleton />
      </header>
    );
  }

  return (
    <header className={style.header}>
      <Avatar
        src={avatarLink}
        size={32}
        className={style.header__logo}
        alt="Author logo"
      />
      <span className={style.header__author}>
        {author}
      </span>
      <span className={style.header__data}>
        {data}
      </span>
    </header>
  );
});
