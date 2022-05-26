/*
  useLocalStorage hook is used to store data in localStorage
  Example:
    const [value, setValue, removeVaue] = useLocalStorage("key", "value");
    const [name, setName, removeName] = useLocalStorage("name", "Kyle")
*/

import useStorage from "../../Utils/useStorage";

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}
