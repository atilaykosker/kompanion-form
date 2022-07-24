import React from 'react';
import { useForm } from '../../context/FormContext';

import { StepWrapper } from '../../hoc';
import { GoalRadio } from '../shared';

interface IProps {
  data: { goal?: string };
}

const InfoFields: React.FC<IProps> = ({ data }) => {
  const { setFormDataHandler } = useForm();

  const inputChangeHandler = (goal: string) => {
    return setFormDataHandler({ goal: goal });
  };
  return (
    <StepWrapper>
      <div>
        <GoalRadio selectedGoal={data.goal} onChange={inputChangeHandler} />
      </div>
    </StepWrapper>
  );
};

export default InfoFields;
