import { Modal } from 'shared/components/Modal/Modal';
import { FC } from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import style from './style.module.scss';

interface AuthModalProps {
  isOpen: boolean;
  onClose?: () => void;
  container?: HTMLElement;
}

export const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose, container }) => (
  <Modal className={style['auth-modal']} isOpen={isOpen} onClose={onClose} container={container}>
    <AuthForm />
  </Modal>
);
