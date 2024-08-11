import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/components/LanguageSwitcher';
import ToggleArrow from 'shared/assets/icon/arrow.svg';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { SidebarLink } from 'widgets/Sidebar/components/SidebarLink/SidebarLink';
import { SidebarLinkItems } from 'widgets/Sidebar/models/sidebar-link-items';
import style from './style.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(style.sidebar__container, { [style.collapsed]: collapsed }, [className])}
    >
      <div className={style.sidebar__content}>
        <div className={style.sidebar__links}>
          {SidebarLinkItems.map((link) => (
            <SidebarLink link={link} collapsed={collapsed} key={link.to} />
          ))}
        </div>
        <div className={style.sidebar__switchers}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        <AppButton
          data-testid="sidebar-toggle-button"
          className={classNames(style['sidebar__toggle-icon'], { [style.collapsed]: collapsed }, [])}
          onClick={onToggle}
          appearance={[ButtonAppearance.CLEAR]}
        >
          <ToggleArrow />
        </AppButton>
      </div>
    </div>
  );
});
