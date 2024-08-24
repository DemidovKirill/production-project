import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './style.module.scss';

interface ArticleProps {
  className?: string;
}

export const Article = memo((props: ArticleProps) => {
  const { t } = useTranslation('article-translation');
  const { className } = props;

  return (
    <section className={classNames(style.article, {}, [className])}>
      {t('article')}
    </section>
  );
});
