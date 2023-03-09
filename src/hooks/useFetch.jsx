import { useEffect, useState } from "react";

export const useFetch = (api, query = "") => {
  const [data, setData] = useState([]);
  const url = `https://fakestoreapi.com/products/`;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, [url]);
  console.log(data);
  return { data };
};
