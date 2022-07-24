import React, { useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { localeTexts } from '../../../assets/strings';
import { CheckIcon } from '../../../assets/icons';

import './style.scss';

interface IProps {
  selectedDays: string[];
  onChange: (days: string[]) => void;
  limited: boolean;
}

const DaySelect: React.FC<IProps> = ({ selectedDays, onChange, limited }) => {
  const { language } = useLanguage();
  const days = [
    {
      name: localeTexts[language].monday,
      value: 'monday',
      restricted: false
    },
    {
      name: localeTexts[language].tuesday,
      value: 'tuesday',
      restricted: true
    },
    {
      name: localeTexts[language].wednesday,
      value: 'wednesday',
      restricted: false
    },
    {
      name: localeTexts[language].thursday,
      value: 'thursday',
      restricted: true
    },
    {
      name: localeTexts[language].friday,
      value: 'friday',
      restricted: true
    },
    {
      name: localeTexts[language].saturday,
      value: 'saturday',
      restricted: false
    },
    {
      name: localeTexts[language].sunday,
      value: 'sunday',
      restricted: false
    }
  ];

  useEffect(() => {
    if (limited) {
      //If changed mass index filter restiricted days
      const restrictedDays = days
        .map((day) => {
          if (day.restricted === true) return day.value;
        })
        .filter((day) => day !== undefined);

      const filteredData = selectedDays.filter((day) => !restrictedDays.includes(day));

      onChange(filteredData);
    }
  }, [limited]);

  const handleOnChange = (value: string) => {
    const tempCheckedState = [...selectedDays];
    //If array contains this day remove it
    if (selectedDays.find((day) => day === value)) {
      tempCheckedState.splice(tempCheckedState.indexOf(value), 1);
    } else {
      tempCheckedState.push(value);
    }

    onChange(tempCheckedState);
  };

  return (
    <ul className="days-list">
      {days.map(({ name, value, restricted }, index) => {
        const restirectedAndLimited = restricted && limited;
        return (
          <li key={value} onClick={() => (restirectedAndLimited ? null : handleOnChange(value))}>
            <div className="days-list__item">
              <label htmlFor={`custom--checkbox-${index}`}>{name}</label>
              {restirectedAndLimited ? null : (
                <div>
                  <CheckIcon checked={!!selectedDays.find((day) => day === value)} />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DaySelect;
