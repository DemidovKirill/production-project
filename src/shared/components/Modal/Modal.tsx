import React, {
  FunctionComponent, ReactNode,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Overlay } from 'shared/components/Overlay/Overlay';
import { Portal } from 'shared/components/Portal/Portal';
import style from './style.module.scss';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
  container?: HTMLElement;
}

export const Modal: FunctionComponent<ModalProps> = (props) => {
  const {
    children, isOpen, className, onClose, container,
  } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={container}>
      <Overlay onClose={onClose} isOpen={isOpen}>
        <div
          className={classNames(style.modal, {}, [className])}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </Overlay>
    </Portal>
  );
};
