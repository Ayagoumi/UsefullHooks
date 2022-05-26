/*
  useToogle(initialValue) is a custom hook that allows you to toggle a boolean value.
  Example:
    const [value, setValue] = useToogle(false);
*/

import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
