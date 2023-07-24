import { useEffect, useState } from 'react';
import Axios from 'axios';

export function useMultiFetch(urls) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = () => {
        const requests = urls.map((url) => Axios.get(url));
        Axios.all(requests).then((responses) => {
            const newData = responses.map((resp) => ({
                data: resp.data
            }));
            
            setResponse(newData)
            setLoading(false);
          })
          .catch((error) => {
            setError(error.response.request._response)
          });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { response, loading, error } ;
}