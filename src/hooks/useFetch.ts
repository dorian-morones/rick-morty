/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

function useFetch(url: string) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading, fetchUrl];
}

export { useFetch };
