import React, { FunctionComponent, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { ModalAuth } from 'shared/components/Modals/ModalAuth/ModalAuth';
import style from './style.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <AppButton appearance={[ButtonAppearance.CLEAR]} onClick={onToggleModal}>
        {t('auth')}
      </AppButton>
      <ModalAuth isOpen={showModal} toggleShowModal={onToggleModal} />
    </div>
  );
};
