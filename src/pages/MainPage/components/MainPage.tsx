import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation('main-page-translation');

  return (
    <div>
      {t('mainPage')}
    </div>
  );
};

export default MainPage;