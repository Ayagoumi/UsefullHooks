/*
  useWindowSize hook - is used to get the size of the window
  Exemple:
    const { width, height } = useWindowSize();
*/

import { useState } from "react";
import useEventListener from "./useEventListener";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
}
