import { useState } from "react";

export const useForm = (initialState = {}) => {

  const [formValue, setFormValue] = useState(initialState);

  const handleInputChange = ({ target:input }) => {
    
    setFormValue({
      ...formValue,
      [input.name]: input.value,
    });
  };

  const resetInput = () => {
    setFormValue( initialState )
  }


  return [formValue, handleInputChange, resetInput];
};
