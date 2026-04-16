import { useState } from 'react';

type Validator = (value: string) => string | null;

export const useInput = (initialValue: string, validators: Validator[] = []) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const validate = (val: string) => {
    for (let rule of validators) {
      const err = rule(val);
      if (err) return err;
    }
    return null;
  };

  const onChangeText = (text: string) => {
    setValue(text);

    if (touched) {
      setError(validate(text));
    }
  };

  const onBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  return {
    value,
    setValue,
    error,
    onChangeText,
    onBlur,
    isValid: !error,
  };
};
