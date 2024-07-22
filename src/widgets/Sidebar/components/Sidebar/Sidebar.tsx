import { FunctionComponent, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/components/LanguageSwitcher';
import ToggleArrow from 'shared/assets/icon/arrow.svg';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
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
    <div
      data-testid="sidebar"
      className={classNames(style.sidebar__container, { [style.collapsed]: collapsed }, [className])}
    >
      <div className={style.sidebar__content}>
        <AppButton
          data-testid="sidebar-toggle-button"
          className={classNames(style['sidebar__toggle-icon'], { [style.collapsed]: collapsed }, [])}
          onClick={onToggle}
          appearance={[ButtonAppearance.CLEAR]}
        >
          <ToggleArrow />
        </AppButton>
        <div className={style.sidebar__switchers}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
