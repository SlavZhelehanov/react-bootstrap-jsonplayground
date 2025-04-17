import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

import useFetch from '../../hooks/UseFetch';
import Spinner from '../global/Spinner';
import Message from '../global/Message';


export default function PostComments() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get(`posts/${id}/comments`);
    }, [id]);

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
                {data.map((comment, idx) => {
                    return (
                        <tr key={idx} >
                            <td>{comment["postId"]}</td>
                            <td>{comment["id"]}</td>
                            <td>{comment["name"]}</td>
                            <td><Link to={`/users/email/${comment["email"]}`}>{comment["email"]}</Link></td>
                            <td>{comment["body"]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>}
    </>);
}