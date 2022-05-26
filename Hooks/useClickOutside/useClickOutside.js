/*
  useClickOutside(ref, handler) - Detects when the user clicks outside of a given ref
  Example:
    const [open, setOpen] = useState(false)
    const modalRef = useRef()
    useClickOutside(modalRef, () => {
      if (open) setOpen(false)
    })
*/

import useEventListener from "./useEventListener";

export default function useClickOutside(ref, handler) {
  useEventListener(
    "click",
    (e) => {
      if (ref.current == null || ref.current.contains(e.target)) return;
      handler(e);
    },
    document
  );
}
