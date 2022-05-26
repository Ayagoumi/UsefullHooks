/*
  The useUrgentUpdate() hook forces a component to 
  re-render when it gets called from anywhere inside it.
  This is useful for components that need to update
  their state when the user interacts with them.
  Example:
    const update = useUrgentUpdate();
    <button onClick={update}>Force Render</button>
*/

import { useReducer } from "react";
const r = (v) => (v + 1) % 1000000;

export function useUrgentUpdate() {
  const [_, u] = useReducer(r, 0);
  return u;
}
