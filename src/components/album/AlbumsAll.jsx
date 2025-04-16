import { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

import useFetch from "../../hooks/UseFetch";
import Spinner from "../global/Spinner";
import Message from "../global/Message";


export default function AlbumsAll() {
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get(`albums`);
    }, []);

    return (
        <Container className="mt-4">
            {loading && <Spinner />}

            {error && <Message message={error?.message || error} color="danger" />}

            {data && (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {data.map(album => (
                        <Col key={album.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title><Link to={`/albums/${album.id}/photos`}>Album ID: {album.id}</Link></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">User ID: {album.userId}</Card.Subtitle>
                                    <Card.Text>{album.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}