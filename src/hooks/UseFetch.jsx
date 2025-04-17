import { useCallback, useState } from "react";

export default function useFetch(baseURL) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const requester = useCallback(async function (method, endpoint, body, options = {}) {
        setLoading(true);
        setError(null);

        const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
        const signal = options.signal;

        const fetchOptions = {
            method,
            headers,
            ...(body && { body: JSON.stringify(body) }),
            ...(signal && { signal }),
        };

        try {
            const response = await fetch(`${baseURL}${endpoint}`, fetchOptions);

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            if (err.name === "AbortError") {
                console.log("Fetch aborted");
                setError({ message: "Fetch aborted" });
            } else {
                setError(err);
            }
        } finally {
            setLoading(false);
        }
    }, [baseURL]);

    const get = useCallback((endpoint, options) => requester("GET", endpoint, null, options), [requester]);
    const post = useCallback((endpoint, body, options) => requester("POST", endpoint, body, options), [requester]);
    const put = useCallback((endpoint, body, options) => requester("PUT", endpoint, body, options), [requester]);
    const del = useCallback((endpoint, options) => requester("DELETE", endpoint, null, options), [requester]);

    return { data, error, loading, get, post, put, del };
}