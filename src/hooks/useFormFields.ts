import { useState, ChangeEventHandler } from 'react';

type ChangeFieldHandler = ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;

type Validation<T> = Record<keyof T, { validator: (v: string) => boolean; error: string }>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useFormFields<T extends { [key: string]: string }>(
  initialState: T,
  validation?: Validation<T>
) {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleFieldChange: ChangeFieldHandler = (e) => {
    e.preventDefault();

    const { id, value } = e.target;

    setFields({ ...fields, [id]: value });

    if (validation && validation[id]) {
      const fieldValidation = validation[id];

      if (!fieldValidation.validator(value)) {
        setErrors({
          ...errors,
          [id]: fieldValidation.error,
        });
      } else {
        setErrors({
          ...errors,
          [id]: '',
        });
      }
    }
  };

  const initialize = (state: Partial<T>): void => setFields({ ...fields, ...state });

  return [fields, handleFieldChange, errors, initialize] as const;
}

export default useFormFields;
