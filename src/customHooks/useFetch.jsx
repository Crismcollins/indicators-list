import { useEffect, useState } from 'react';
import Axios from 'axios';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    const fetchData = () => {
        setIsLoading(true);
        return Axios.get(url, {
            timeout: 5000
        })
            .then((response) => setData(response.data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error } ;
}