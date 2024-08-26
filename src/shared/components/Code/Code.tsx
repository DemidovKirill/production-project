import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import CopyIcon from 'shared/assets/icon/copy.svg';
import style from './style.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(style.code, {}, [className])}>
      <AppButton onClick={onCopy} className={style['code__copy-button']} appearance={[ButtonAppearance.CLEAR]}>
        <CopyIcon />
      </AppButton>
      <code>
        {text}
      </code>
    </pre>
  );
});
