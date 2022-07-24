import React from 'react';
import { FormProvider } from '../context/FormContext';
import { LanguageProvider } from '../context/LanguageContext';

interface IProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <LanguageProvider>
      <FormProvider>{children}</FormProvider>
    </LanguageProvider>
  );
};

export default AppWrapper;
