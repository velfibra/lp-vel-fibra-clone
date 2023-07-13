import React, { useEffect, useState } from 'react';
import { UseForm, UseFormReturn, Register } from './types';

export default function useForm<T>({
  resolver = () => ({}),
  initialState = {},
}: UseForm<T> = {}): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialState as T);
  const [errors, setErrors] = useState<Partial<T>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    for (const key in errors) {
      setErrors((state) => ({ ...state, [key]: resolver(values)[key] }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name } = target;
    if (!(name in errors)) setErrors({ ...errors, [name]: (resolver(values) as never)[name] });
  };

  const register: Register<T> = (fieldName) => {
    return {
      name: fieldName,
      value: values[fieldName] || '',
      onChange,
      onBlur,
    };
  };

  const handleSubmit: UseFormReturn<T>['handleSubmit'] = (callback) => async (event) => {
    event.preventDefault();
    const errors = resolver(values);
    setErrors(errors);
    if (Object.values(errors).some((e) => e)) return;
    setErrors({});
    setIsSubmitting(true);
    await callback(values);
    setIsSubmitting(false);
  };
  const setValue: UseFormReturn<T>['setValue'] = (fieldName, value) => {
    setValues((state) => ({
      ...state,
      [fieldName]: value,
    }));
  };

  return { register, errors, values, handleSubmit, isSubmitting, setValue };
}
