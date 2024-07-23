import { FunctionComponent, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/components/LanguageSwitcher';
import ToggleArrow from 'shared/assets/icon/arrow.svg';
import HomeLink from 'shared/assets/icon/links/home.svg';
import AboutLink from 'shared/assets/icon/links/about.svg';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { AppLink, AppLinkTheme } from 'shared/components/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerPathConfig';
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
      className={classNames(style.sidebar__container, { [style.collapsed]: collapsed }, [className])}
    >
      <div className={style.sidebar__content}>
        <div className={style.sidebar__links}>
          <AppLink
            className={style.sidebar__link}
            theme={AppLinkTheme.PRIMARY}
            to={RoutePath.main}
            isSidebarCollapsed={collapsed}
          >
            <HomeLink />
            <span className={style['sidebar__link-title']}>{t('mainPageLink')}</span>
          </AppLink>
          <AppLink
            className={style.sidebar__link}
            theme={AppLinkTheme.PRIMARY}
            to={RoutePath.about}
            isSidebarCollapsed={collapsed}
          >
            <AboutLink />
            <span className={style['sidebar__link-title']}>{t('aboutPageLink')}</span>
          </AppLink>
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
};
