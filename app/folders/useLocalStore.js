import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key,value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
