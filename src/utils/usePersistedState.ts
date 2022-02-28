import { useState, useEffect } from "react";

function usePersistedState(key: string, initialstate: any) {
  const [state, setState] = useState(initialstate);

  useEffect(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return setState(JSON.parse(storageValue));
    } else {
      return initialstate;
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
