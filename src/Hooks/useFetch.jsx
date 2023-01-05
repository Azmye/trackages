import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint, courierCode, awbNumber) => {
  const baseUrl = 'https://api.binderbyte.com/v1';
  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}${endpoint}`, {
        params: {
          api_key: apiKey,
          courier: courierCode,
          awb: awbNumber,
        },
      })
      .then((response) => {
        setData(response);
        setLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [endpoint, courierCode, awbNumber]);

  return { data, loading, error };
};

export default useFetch;
