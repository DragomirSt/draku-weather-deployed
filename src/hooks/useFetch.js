
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(url)
            .then(res => res.json())
            .then(result => {
                if (result.error) {
                    throw (result.error.message);
                };
                setData([result]);
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err);
            })
            .finally(() => {
                setLoading(false);
            })
        return () => {
            setError(false);
        };
    }, [url]);

    return { data, error, errorMessage, loading };
};

export default useFetch;