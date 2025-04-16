import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import useFetch from '../../hooks/UseFetch';
import Spinner from '../global/Spinner';
import Message from '../global/Message';

export default function UsersAll() {
    const navigate = useNavigate();
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get("users?username=Kamren");
    }, []);

    console.log(data);    

    return (<>
        {loading && <Spinner />}

        {error && <Message message={error?.message || error} color="danger" />}

        {data && <Table responsive striped bordered hover>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((objKey, index) => (
                        <th key={index}>{objKey}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((user, idx) => {
                    return (
                        <tr key={idx} onClick={() => navigate(`/users/${user["id"]}/posts`)}>
                            <td>{user["id"]}</td>
                            {Object.keys(user).map((col, i) => {
                                if (col != "id") {
                                    if (col === "address") {
                                        return <td key={i}>{user[col]["street"]}</td>
                                    } else if (col === "company") {
                                        return <td key={i}>{user[col]["name"]}</td>
                                    } else {
                                        return <td key={i}>{user[col]}</td>
                                    }
                                }
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>}
    </>);
}