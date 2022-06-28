import { useCallback, useState } from "react";
import { setTextRange } from "typescript";

const useDelayedCall = <T>(call: () => Promise<any>):
 [() => void, T | null | undefined, boolean, string ] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T | null>();
  const [error, setError] = useState<string>("");

  const call2 = ()=>{
    setIsLoading(true);
    const sendTime = Date.now();
    call().then((resp : T) => {
      error && setError("");
      setResponse(resp);
    }).catch((err : string) => {
      setError(err);
      setResponse(null);
    }).finally(
      () => {
        const receiveTime = Date.now();
        const responseTime = receiveTime - sendTime;
        setTimeout(()=>{setIsLoading(false)}, 3000-responseTime);
  })};

  return [call2, response, isLoading, error];
};

export default useDelayedCall;