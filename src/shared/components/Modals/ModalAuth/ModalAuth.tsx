import React, {
  FunctionComponent,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Overlay } from 'shared/components/Overlay/Overlay';
import { Portal } from 'shared/components/Portal/Portal';
import style from './style.module.scss';

interface ModalAuthProps {
  className?: string;
  isOpen: boolean;
  toggleShowModal?: () => void;
  container?: HTMLElement;
}

export const ModalAuth: FunctionComponent<ModalAuthProps> = ({
  className, isOpen, toggleShowModal, container,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={container}>
      <Overlay toggleShowModal={toggleShowModal} isOpen={isOpen}>
        <div
          className={classNames(style.modal, {}, [className])}
          onClick={(e) => e.stopPropagation()}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sunt?
        </div>
      </Overlay>
    </Portal>
  );
};
