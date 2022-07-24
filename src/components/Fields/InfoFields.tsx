import React from 'react';

import { useForm } from '../../context/FormContext';
import { useLanguage } from '../../context/LanguageContext';

import { StepWrapper } from '../../hoc';
import { Input } from '../shared';
import { localeTexts } from '../../assets/strings';


interface IProps {
  data: { name?: string; surname?: string; email?: string; password?: string };
}

const Step4: React.FC<IProps> = ({ data }) => {
  const { setFormDataHandler } = useForm();
  const { language } = useLanguage();

  const inputChangeHandler = (
    value: number | string,
    type: 'name' | 'surname' | 'email' | 'password'
  ) => {
    return setFormDataHandler({ [type]: value });
  };

  return (
    <StepWrapper>
      <div className="step__multi-input-group">
        <div className="step__input-group">
          <Input
            placeholder={localeTexts[language].name}
            value={data.name}
            type={'text'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler(event.target.value, 'name')
            }
          />
          <Input
            placeholder={localeTexts[language].surname}
            value={data.surname}
            type={'text'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler(event.target.value, 'surname')
            }
          />
        </div>
        <div className="step__input-group">
          <Input
            placeholder={localeTexts[language].email}
            value={data.email}
            type={'email'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler(event.target.value, 'email')
            }
          />
          <Input
            placeholder={localeTexts[language].password}
            value={data.password}
            type={'password'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler(event.target.value, 'password')
            }
          />
        </div>
      </div>
    </StepWrapper>
  );
};

export default Step4;
