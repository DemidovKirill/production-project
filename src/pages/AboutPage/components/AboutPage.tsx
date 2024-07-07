import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about-page-translation');

  return (
    <div>
      {t('aboutPage')}
    </div>
  );
};

export default AboutPage;