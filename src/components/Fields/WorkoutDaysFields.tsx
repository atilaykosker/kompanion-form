import React, { useEffect, useState } from 'react';
import { useForm } from '../../context/FormContext';

import { StepWrapper } from '../../hoc';
import { DaySelect } from '../shared';

interface IProps {
  data: {
    workoutDays?: string[];
    height?: number;
    weight?: number;
  };
}

const WorkoutDaysFields: React.FC<IProps> = ({ data }) => {
  const [isLimited, setIsLimited] = useState<boolean>(null);
  const { setFormDataHandler } = useForm();

  const inputChangeHandler = (days: string[]) => {
    return setFormDataHandler({ workoutDays: days });
  };
  useEffect(() => {
    setIsLimited(0.5 < data.weight / data.height);
  }, [data.weight, data.height]);

  return (
    <StepWrapper>
      {isLimited !== null && (
        <div>
          <DaySelect
            limited={isLimited}
            selectedDays={data.workoutDays}
            onChange={inputChangeHandler}
          />
        </div>
      )}
    </StepWrapper>
  );
};

export default WorkoutDaysFields;
