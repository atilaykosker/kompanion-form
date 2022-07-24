import React from 'react';

import { useLanguage } from '../../../context/LanguageContext';

import { FlameIcon, SmileIcon, TierIcon } from '../../../assets/icons';
import { localeTexts } from '../../../assets/strings';

import './style.scss';
interface IProps {
  selectedGoal: string;
  onChange: (goal: string) => void;
}
const GoalRadio: React.FC<IProps> = ({ selectedGoal, onChange }) => {
  const { language } = useLanguage();
  const goals = [
    {
      name: localeTexts[language].loseWeight,
      value: 'loseWeight',
      icon: <FlameIcon />
    },
    {
      name: localeTexts[language].buildMuscle,
      value: 'buildMuscle',
      icon: <TierIcon />
    },
    {
      name: localeTexts[language].stayHealth,
      value: 'stayHealth',
      icon: <SmileIcon />
    }
  ];
  return (
    <div className="goal-list">
      {goals.map(({ name, icon, value }) => {
        return (
          <div key={name} className="goal-list__item" onClick={() => onChange(value)}>
            <div className="goal-list__info">
              <div className="goal-list__icon">{icon}</div>
              <span>{name}</span>
            </div>
            <input
              type="radio"
              name={name}
              value={value}
              checked={selectedGoal === value}
              onChange={() => null}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GoalRadio;
