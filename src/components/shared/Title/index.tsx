import React from 'react';

interface IProps {
  language: string;
  value: string;
}
const Button: React.FC<IProps> = ({ language, value }) => {
  return (
    <div className={`step__item step__title ${language === 'AR' ? 'step--animation-ar' : ''}`}>
      {value}
    </div>
  );
};

export default Button;
