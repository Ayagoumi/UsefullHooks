/*
  useOnlineStatus - Hook to check if the user is online
  Example:
    const online = useOnlineStatus()
*/

import { useState } from "react"
import useEventListener from "./useEventListener"

export default function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine)

  useEventListener("online", () => setOnline(navigator.onLine))
  useEventListener("offline", () => setOnline(navigator.onLine))

  return online
}