import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import AppButton from 'shared/components/AppButton/AppButton';
import style from './style.module.scss';

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher: FunctionComponent<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      className={classNames(style.languageSwitcher, {}, [className])}
      onClick={changeLanguage}
    >
      {i18n.language.toUpperCase()}
    </AppButton>
  );
};

export default LanguageSwitcher;
