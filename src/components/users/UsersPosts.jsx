import { useParams } from "react-router";
import { Table } from "react-bootstrap";
import { useEffect } from "react";

import useFetch from "../../hooks/UseFetch";
import Spinner from "../global/Spinner";
import Message from "../global/Message";

export default function UsersPosts() {
    const { id } = useParams();
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get(`posts?userId=${id}`);
    }, [id]);

    return (<>
        {loading && <Spinner />}

        {error && <Message message={error?.message || error} color="danger" />}

        {data && <Table responsive striped bordered hover>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((objKey, index) => {
                        if (objKey === "userId") {
                            return <th key={index}>id</th>
                        } else if (objKey === "id") {
                            return <th key={index}>userId</th>
                        } else {
                            return <th key={index}>{objKey}</th>
                        }
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((post, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{post["id"]}</td>
                            {Object.keys(post).map((col, i) => {
                                if (col != "id") return <td key={i}>{post[col]}</td>
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>}
    </>);
}