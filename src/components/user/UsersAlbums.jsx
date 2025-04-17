import { Link, useParams } from "react-router";
import { Table } from "react-bootstrap";
import { useEffect } from "react";

import useFetch from "../../hooks/UseFetch";
import Spinner from "../global/Spinner";
import Message from "../global/Message";

export default function UsersAlbums() {
    const { id } = useParams();
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        // get(`posts?userId=${id}`);
        get(`users/${id}/albums`);
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
                </tr>
            </thead>
            <tbody>
                {data.map((album, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{album["id"]}</td>
                            <td><Link to={`/users/id/${album.userId}`}>{album["userId"]}</Link></td>
                            <td>{album["title"]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>}
    </>);
}