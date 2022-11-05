import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setPending(false);
          setError(true);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((err) => {
        setPending(false);
        setError(true);
      });
    // }, 1000);
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
