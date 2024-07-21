import { FunctionComponent, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/components/LanguageSwitcher';
import style from './style.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}
    >
      <AppButton
        data-testid="sidebar-toggle-button"
        appearance={[ButtonAppearance.CLEAR]}
        onClick={onToggle}
      >
        {t('toggle')}
      </AppButton>
      <div className={style.sidebar__switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
