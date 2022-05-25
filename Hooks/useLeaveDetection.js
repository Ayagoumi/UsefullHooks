/*
  The useLeaveDetection() hook allows you 
  to detect when a user's cursor leaves the document's boundaries
*/
import { useEffect } from "react";

export function useLeaveDetection(onLeave) {
  useEffect(() => {
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () =>
      document.documentElement.removeEventListener("mouseleave", onLeave);
  }, []);
}
