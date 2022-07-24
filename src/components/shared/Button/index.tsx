import React from 'react';
import './style.scss';

interface IProps {
  text: string;
  isDisable?: boolean;
  onClick?: () => void;
}
const Button: React.FC<IProps> = ({ text, isDisable, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${isDisable ? 'button--disabled' : ''}`}
      disabled={isDisable}
    >
      <p> {text}</p>
    </button>
  );
};

export default Button;
