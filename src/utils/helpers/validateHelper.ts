type StepType = {
  component: JSX.Element;
  title: string;
  fields: number[] | string[][] | string[];
};

export const validateFields = (steps: StepType[], step: number) => {
  let validCount = 0;
  steps[step].fields.forEach((field) => {
    if (field) {
      if (Array.isArray(field) && field.length < 1) {
        return;
      }
      validCount++;
    }
  });
  return validCount === steps[step].fields.length;
};
