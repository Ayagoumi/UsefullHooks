/*
  The useToggle() hook can toggle between a set of two possible 
  values and automatically update the state with the new value.
*/

import { useState } from "react";

export function useToggle(initialValue, options) {
  const handleToggle = () =>
    setState((current) => (current === options[0] ? options[1] : options[0]));
  const [state, setState] = useState(initialValue);

  const toggle = (value) =>
    typeof value !== "undefined" ? setState(value) : handleToggle();
  return [state, toggle];
}
