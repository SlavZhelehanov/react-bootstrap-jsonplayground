import { Link, useParams } from "react-router";
import { Table } from "react-bootstrap";
import { useEffect } from "react";

import useFetch from "../../hooks/UseFetch";
import Spinner from "../global/Spinner";
import Message from "../global/Message";

export default function UsersTodos() {
    const { id } = useParams();
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get(`users/${id}/todos`);
    }, [id]);

    return (<>
        {loading && <Spinner />}

        {error && <Message message={error?.message || error} color="danger" />}

        {data && <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Owner ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data.map((todo, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{todo["id"]}</td>
                            <td><Link to={`/users/id/${todo.userId}`}>{todo["userId"]}</Link></td>
                            <td>{todo["title"]}</td>
                            <td>{todo["completed"] ? "Yes" : "No"}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>}
    </>);
}