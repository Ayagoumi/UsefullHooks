/*
  useEffectOnce hook - is used to run a function only once
  Example:
    useEffectOnce(() => {
      // do something
    });
*/

import { useEffect } from "react";

export default function useEffectOnce(cb) {
  useEffect(cb, []);
}
