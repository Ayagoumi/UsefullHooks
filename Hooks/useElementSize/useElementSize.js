/*
  useElementSize hook - is used to get the size of an element
  Example:
    const ref = useRef()
    const size = useSize(ref)

    <div ref={ref} className></div>
*/

import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

export default function useElementSize(ref) {
  const [size, setSize] = useState({})

  useEffect(() => {
    if (ref.current == null) return
    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect))
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return size
}