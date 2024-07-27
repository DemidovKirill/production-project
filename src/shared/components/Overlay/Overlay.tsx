import React, {
  AnimationEvent, FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './style.module.scss';

interface OverlayProps {
  className?: string;
  children: ReactNode;
  toggleShowModal: () => void;
  isOpen: boolean;
}

export const Overlay: FunctionComponent<OverlayProps> = ({
  className, children, toggleShowModal, isOpen,
}) => {
  const [opened, setOpened] = useState(isOpen);

  const handleClose = () => {
    setOpened(false);
  };

  const onAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === 'close-overlay') {
      toggleShowModal?.();
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
      className={classNames(style.overlay, mods, [className])}
      onClick={handleClose}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};