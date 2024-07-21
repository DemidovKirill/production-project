import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/components/AppButton/AppButton';

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: FunctionComponent<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      className={classNames('', {}, [className])}
      onClick={changeLanguage}
    >
      {i18n.language.toUpperCase()}
    </AppButton>
  );
};
