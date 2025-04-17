import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

import useFetch from '../../hooks/UseFetch';
import Spinner from '../global/Spinner';
import Message from '../global/Message';

export default function UsersAll() {
    const navigate = useNavigate();
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get("users");
    }, []);

    return (<>
        {loading && <Spinner centered />}

        {error && <Message message={error?.message || error} color="danger" />}

        {data && <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, idx) => {
                    return (
                        <tr key={idx}>
                            <td><Link to={`/users/id/${user.id}`}>{user["id"]}</Link></td>
                            <td><Link to={`/users/name/${user.name}`}>{user["name"]}</Link></td>
                            <td><Link to={`/users/username/${user.username}`}>{user["username"]}</Link></td>
                            <td><Link to={`/users/email/${user.email}`}>{user["email"]}</Link></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>}
    </>);
}