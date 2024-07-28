import { Modal } from 'shared/components/Modal/Modal';
import { FC } from 'react';
import AuthForm from '../AuthForm/AuthForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <AuthForm />
  </Modal>
);
