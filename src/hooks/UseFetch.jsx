import { useCallback, useState } from "react";

export default function useFetch(baseURL) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const requester = useCallback(async function (method, endpoint, body = null) {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${baseURL}${endpoint}`, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: body ? JSON.stringify(body) : null,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [baseURL]);

    const get = useCallback((endpoint) => requester("GET", endpoint), [requester]);
    const post = useCallback((endpoint, body) => requester("POST", endpoint, body), [requester]);
    const put = useCallback((endpoint, body) => requester("PUT", endpoint, body), [requester]);
    const del = useCallback((endpoint) => requester("DELETE", endpoint), [requester]);

    return { data, error, loading, get, post, put, del };
}