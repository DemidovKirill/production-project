import { Modal } from 'shared/components/Modal/Modal';
import { FC, Suspense } from 'react';
import { AuthFormLazy } from 'features/AuthByUsername/components/AuthForm/AuthForm.lazy';
import { PageLoader } from 'widgets/PageLoader';
import style from './style.module.scss';

interface AuthModalProps {
  isOpen: boolean;
  onClose?: () => void;
  container?: HTMLElement;
}

export const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose, container }) => (
  <Modal className={style['auth-modal']} isOpen={isOpen} onClose={onClose} container={container}>
    <Suspense fallback={<PageLoader />}>
      <AuthFormLazy />
    </Suspense>
  </Modal>
);
