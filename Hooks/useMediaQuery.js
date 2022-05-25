/*
  The useMediaQuery() hook allows you to react to media 
  queries inside of your React components. It accepts a media query 
  argument and returns true or false when the query 
  is a match or not with your current browser's properties.
*/

import { useState, useEffect, useRef } from "react";

function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}

function computeInitialValue(query, initialValue) {
  if (initialValue !== undefined) return initialValue;
  if (typeof window !== "undefined" && "matchMedia" in window)
    return window.matchMedia(query).matches;
  return false;
}

export function useMediaQuery(query, initialValue) {
  const [matches, setMatches] = useState(
    computeInitialValue(query, initialValue)
  );
  const ref = useRef();

  useEffect(() => {
    if ("matchMedia" in window) {
      ref.current = window.matchMedia(query);
      setMatches(ref.current.matches);
      return attachMediaListener(ref.current, (event) =>
        setMatches(event.matches)
      );
    }

    return undefined;
  }, [query]);

  return matches;
}
