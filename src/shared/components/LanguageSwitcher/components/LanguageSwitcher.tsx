import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';

export const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      onClick={changeLanguage}
      appearance={[ButtonAppearance.CLEAR]}
    >
      {i18n.language.toUpperCase()}
    </AppButton>
  );
});
