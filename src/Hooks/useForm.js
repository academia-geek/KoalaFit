import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValue, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChangeName = ({ target }) => {
    setValues({
      ...formValue,
      [target.name]: target.value,
    });
  };

  return { formValue, handleInputChangeName, reset };
};
