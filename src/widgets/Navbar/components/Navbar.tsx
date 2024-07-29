import React, { FunctionComponent, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { AuthModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { LOCAL_STORAGE_USER_DATA_KEY } from 'shared/constants/local-storage-keys';
import style from './style.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onUserLogout = useCallback(() => {
    dispatch(userActions.logout());

    setIsOpen(false);

    localStorage.removeItem(LOCAL_STORAGE_USER_DATA_KEY);
  }, [dispatch]);

  if (userAuthData) {
    return (
      <div className={classNames(style.navbar, {}, [className])}>
        <AppButton appearance={[ButtonAppearance.CLEAR]} onClick={onUserLogout}>
          {t('signOut')}
        </AppButton>
      </div>
    );
  }

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <AppButton appearance={[ButtonAppearance.CLEAR]} onClick={onOpenModal}>
        {t('signIn')}
      </AppButton>
      <AuthModal isOpen={isOpen} onClose={onCloseModal} />
    </div>
  );
};
