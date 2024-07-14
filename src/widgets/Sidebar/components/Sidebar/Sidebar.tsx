import { FunctionComponent, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppButton, { ButtonAppearance } from 'shared/components/AppButton/AppButton';
import ThemeSwitcher from 'shared/components/ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from 'shared/components/LanguageSwitcher/LanguageSwitcher';
import style from './style.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}>
      <AppButton appearance={[ButtonAppearance.CLEAR]} onClick={onToggle}>
        Toggle
      </AppButton>
      <div className={style.sidebar__switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
