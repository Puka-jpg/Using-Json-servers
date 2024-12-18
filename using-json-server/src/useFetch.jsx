import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortConst.signal }) //get the data from our local host
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data");
          }
          //this retuns a  response object
          return res.json(); // responsse object is not data so we need to return it in json format
        })
        .then((data) => {
          // now this another then method to get data.data is whatever we have inside our db.json
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 100);

    return () => abortConst.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
