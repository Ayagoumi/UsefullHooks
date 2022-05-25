/*
  The useInputValue() hook lets you easily manage states for inputs in your components
*/
import { useState } from "react";

export function handleChange(setValue) {
  return (val) => {
    if (!val) setValue(val);
    else if (typeof val === "object" && "nativeEvent" in val) {
      const { currentTarget } = val;

      if (currentTarget.type === "checkbox") setValue(currentTarget.checked);
      else setValue(currentTarget.value);
    } else setValue(val);
  };
}

export function useInputValue(initialState) {
  const [value, setValue] = useState(initialState);
  return [value, handleChange(setValue)];
}
