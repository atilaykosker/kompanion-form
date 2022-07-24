import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

import './style.scss';

const FlagSelect: React.FC = () => {
  const { language, setLanguageHandler } = useLanguage();

  return (
    <div className="flag-select">
      <span
        className={`${language === 'AR' && 'selected--flag'}`}
        onClick={() => setLanguageHandler('AR')}
      >
        🇸🇦
      </span>
      <span
        className={`${language === 'EN' && 'selected--flag'}`}
        onClick={() => setLanguageHandler('EN')}
      >
        🇬🇧
      </span>
    </div>
  );
};

export default FlagSelect;
