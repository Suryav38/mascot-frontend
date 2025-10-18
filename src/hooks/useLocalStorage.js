import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Get from memory storage (not localStorage as it's not supported in Claude artifacts)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      return initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};