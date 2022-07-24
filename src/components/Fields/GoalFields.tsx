import React from 'react';
import { GoalRadio } from '../shared';
import { StepWrapper } from '../../hoc';

import { useForm } from '../../context/FormContext';

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
