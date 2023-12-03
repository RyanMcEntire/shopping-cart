import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { T } from 'vitest/dist/types-198fd1d9.js';

function usePersistedState(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error(`Error reading key "${key}" from localStorage:`, error);
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error setting key "${key}" in localStorage:`, error);
    }
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
