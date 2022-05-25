/*
  The useUrgentUpdate() hook forces a component to 
  re-render when it gets called from anywhere inside it.
*/

import { useReducer } from "react";
const r = (v) => (v + 1) % 1000000;

export function useUrgentUpdate() {
  const [_, u] = useReducer(r, 0);
  return u;
}
