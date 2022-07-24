import React, { useState } from 'react';

import { Button, FlagSelect, Title } from '../../components/shared';

import { MassFields, WorkoutDaysFields, GoalFields, InfoFields } from '../../components/Fields';

import { useLanguage } from '../../context/LanguageContext';
import { useForm } from '../../context/FormContext';

import { localeTexts } from '../../assets/strings';
import './style.scss';
import { postData } from '../../utils/services/formService';
import { validateFields } from '../../utils/helpers/validateHelper';

const MainPage: React.FC = () => {
  const { language } = useLanguage();
  const { formData } = useForm();

  const steps = [
    {
      component: <MassFields data={formData} />,
      title: localeTexts[language].step1Title,
      fields: [formData.height, formData.weight]
    },
    {
      component: <WorkoutDaysFields data={formData} />,
      title: localeTexts[language].step2Title,
      fields: [formData.workoutDays]
    },
    {
      component: <GoalFields data={formData} />,
      title: localeTexts[language].step3Title,
      fields: [formData.goal]
    },
    {
      component: <InfoFields data={formData} />,
      title: localeTexts[language].step4Title,
      fields: [formData.name, formData.surname, formData.email, formData.password]
    }
  ];

  const [step, setStep] = useState(0);
  const isFinalStep = step === steps.length - 1;

  const setStepHandler = async () => {
    if (!validateFields(steps, step)) return alert(localeTexts[language].required);
    try {
      const response = postData(formData);
      if (response && isFinalStep) setStep(-1);
      else if (response) setStep(step + 1);
    } catch (err) {
      alert(localeTexts[language].wentWrong);
    }
  };

  return (
    <div className={`step__item step__title ${language === 'AR' ? 'step--animation-ar' : ''}`}>
      <FlagSelect />
      <div className="step-container" key={step}>
        {/* If its successfully saved */}
        {step === -1 ? (
          <p>{localeTexts[language].congrats}</p>
        ) : (
          <>
            <Title value={steps[step].title} language={language} />

            {steps[step].component}
            <div
              className={`step__buttons ${language === 'AR' ? 'step--animation-ar' : ''}`}
              key={step}
            >
              <Button
                isDisable={step === 0}
                onClick={() => setStep(step - 1)}
                text={localeTexts[language].back}
              />
              <Button
                onClick={setStepHandler}
                text={isFinalStep ? localeTexts[language].save : localeTexts[language].next}
              ></Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
