import axios from "axios";
import { useEffect, useState } from "react";
const useFetchAPI = (url) => {
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url);
        setData(data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setIsError(true);
      }
      setIsloading(false);
    };
    fetchData();
  }, []);
  return { isLoading, isError, data };
};

export default useFetchAPI;
