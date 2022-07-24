import React from 'react';
import { localeTexts } from '../../../assets/strings';

import { useLanguage } from '../../../context/LanguageContext';

import './style.scss';

interface IProps {
  placeholder: string;
  value: string | number;
  type: 'height' | 'weight' | 'text' | 'email' | 'password';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ placeholder, type, value, onChange }) => {
  const { language } = useLanguage();
  const isNumberInput = type === 'height' || type === 'weight';
  return (
    <div className="input-container">
      <form>
        <input
          autoComplete=""
          className="input"
          type={isNumberInput ? 'number' : type}
          value={value || ''}
          placeholder={placeholder}
          onChange={onChange}
        />
      </form>
      {isNumberInput ? (
        <span className={`input__info ${language === 'AR' ? 'input__info-ar' : ''}`}>
          {type === 'height' ? localeTexts[language].CM : localeTexts[language].KG}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
