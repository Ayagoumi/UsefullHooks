/*
  useSessionStorage hook is used to store data in sessionStorage
  Example:
    const [value, setValue, removeVaue] = useSessionStorage("key", "value");
    const [name, setName, removeName] = useSessionStorage("name", "Kyle")
*/

import useStorage from "../../Utils/useStorage";

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage);
}
