import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface IProps {
  children: React.ReactNode;
}

const StepWrapper: React.FC<IProps> = ({ children }) => {
  const { language } = useLanguage();
  return (
    <div className={`step__item ${language === 'AR' ? 'step--animation-ar' : ''}`}>{children}</div>
  );
};

export default StepWrapper;
