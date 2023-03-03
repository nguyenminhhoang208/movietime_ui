import { useState, useEffect } from "react";
const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState();
  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return clearTimeout(handle);
  },[value]);
  return debounce;
};

export default useDebounce;
