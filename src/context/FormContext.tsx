import React, { useContext, useState } from 'react';

export type FormDataType = {
  height?: number;
  weight?: number;
  workoutDays?: string[];
  goal?: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
};

type FormStateType = {
  formData: FormDataType;
  setFormDataHandler?: (data: Partial<FormDataType>) => void;
};

const defaultState: FormStateType = {
  formData: {
    height: null,
    weight: null,
    workoutDays: [],
    goal: 'loseWeight',
    name: '',
    surname: '',
    email: '',
    password: ''
  }
};

const FormContext = React.createContext<Partial<FormStateType>>(defaultState);

export default FormContext;

type ProviderProps = {
  children: React.ReactNode;
};
export const FormProvider: React.FC<ProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState(defaultState.formData);

  const setFormDataHandler = (data: Partial<FormDataType>) => {
    const updatedStep = data;
    setFormData({ ...formData, ...updatedStep });
  };
  return (
    <FormContext.Provider value={{ formData, setFormDataHandler }}>{children}</FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
