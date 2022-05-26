/*
  The useHover() hook lets you detect if the user's mouse is hovering over an element
  Example:
    const hovered = useHover(ref);
*/
import { useState } from "react";
import useEventListener from "./useEventListener";

export default function useHover(ref) {
  const [hovered, setHovered] = useState(false);

  useEventListener("mouseover", () => setHovered(true), ref.current);
  useEventListener("mouseout", () => setHovered(false), ref.current);

  return hovered;
}
