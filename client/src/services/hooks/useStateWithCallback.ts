import { useRef, useState, useCallback, useEffect } from "react";

function useStateWithCallback(initialState: any) {
  const [state, setState] = useState<any>(initialState);
  const cbRef = useRef<Function | null>(null);

  const setStateCallback = useCallback((state: any, cb: Function) => {
    cbRef.current = cb;
    setState(state);
  }, []);

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setStateCallback];
}

export default useStateWithCallback;
