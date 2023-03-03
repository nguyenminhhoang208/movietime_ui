import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (apiURL) => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      try {
        await axios.get(apiURL).then((response) => {
          setData(response.data);
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }, [apiURL]);
  return data;
};

export default useFetchData;
