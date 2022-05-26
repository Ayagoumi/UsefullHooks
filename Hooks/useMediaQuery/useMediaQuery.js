/*
  The useMediaQuery() hook allows you to detect if the user's screen is
  at least a certain size.
  Example:
    const isLarge = useMediaQuery("(min-width: 200px)")
*/

import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
}
