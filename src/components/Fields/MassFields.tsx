import React from 'react';
import { localeTexts } from '../../assets/strings';

import { Input } from '../shared';
import { StepWrapper } from '../../hoc';

import { useLanguage } from '../../context/LanguageContext';
import { useForm } from '../../context/FormContext';

interface IProps {
  data: { height?: number | string; weight?: number | string };
}

const MassFields: React.FC<IProps> = ({ data }) => {
  const { setFormDataHandler } = useForm();
  const { language } = useLanguage();
  const inputChangeHandler = (value: number, type: 'weight' | 'height') => {
    if (type === 'weight') {
      return setFormDataHandler({ weight: value });
    }
    return setFormDataHandler({ height: value });
  };
  return (
    <StepWrapper>
      <div className="step__input-group">
        <Input
          placeholder={localeTexts[language].height}
          value={data.height}
          type={'height'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            inputChangeHandler(+event.target.value, 'height')
          }
        />
        <Input
          placeholder={localeTexts[language].weight}
          value={data.weight}
          type={'weight'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            inputChangeHandler(+event.target.value, 'weight')
          }
        />
      </div>
    </StepWrapper>
  );
};

export default MassFields;
