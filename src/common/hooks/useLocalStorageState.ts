import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useLocalStorageState = <S>(
  stateName: string,
  defaultState: S
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState<S>(() => {
    return localStorage.getItem(stateName)
      ? JSON.parse(localStorage.getItem(stateName) ?? '')
      : defaultState;
  });

  useEffect(() => {
    console.log('setting state to LS');
    localStorage.setItem(stateName, JSON.stringify(state));
  }, [stateName, state]);

  return [state, setState];
};

export default useLocalStorageState;
