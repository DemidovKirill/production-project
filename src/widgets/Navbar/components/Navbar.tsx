import React, { FunctionComponent, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { AuthModal } from 'features/AuthByUsername';
import style from './style.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <AppButton appearance={[ButtonAppearance.CLEAR]} onClick={onOpenModal}>
        {t('signIn')}
      </AppButton>
      <AuthModal isOpen={isOpen} onClose={onCloseModal} />
    </div>
  );
};
