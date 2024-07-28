import React, {
  AnimationEvent, FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/contexts/theme-context';
import style from './style.module.scss';

interface OverlayProps {
  className?: string;
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Overlay: FunctionComponent<OverlayProps> = ({
  className, children, onClose, isOpen,
}) => {
  const [opened, setOpened] = useState(isOpen);
  const { theme } = useTheme();

  const handleClose = () => {
    setOpened(false);
  };

  const onAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === 'close-overlay') {
      onClose?.();
    }
  };

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
      setOpened(isOpen);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onKeyDown]);

  const mods = useMemo(() => ({
    [style.close]: !opened,
  }), [opened]);

  return (
    <div
      className={classNames(style.overlay, mods, [className, theme])}
      onClick={handleClose}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};
