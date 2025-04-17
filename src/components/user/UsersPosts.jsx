import { Link, useParams } from "react-router";
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
                    <th>ID</th>
                    <th>Owner ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {data.map((post, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{post["id"]}</td>
                            <td><Link to={`/users/id/${post.userId}`}>{post["userId"]}</Link></td>
                            <td>{post["title"]}</td>
                            <td>{post["body"]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>}
    </>);
}