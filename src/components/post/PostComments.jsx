import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

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
                            {Object.keys(comment).map((col, i) => {
                                if (col === "id") return <td key={i}>{comment["id"]}</td>
                                else if (col != "postId") return <td key={i}>{comment[col]}</td>
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>}
    </>);
}