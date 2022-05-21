import {useState, useCallback} from 'react';

export const useInput = (string: string) => {
  const [value, setValue] = useState(string);

  const handleChange = useCallback(text => {
    setValue(text);
  }, []);

  return {value, onChangeText: handleChange};
};
