import { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

import useFetch from "../../hooks/UseFetch";
import Spinner from "../global/Spinner";
import Message from "../global/Message";

export default function PhotosAll() {
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        get(`photos`, { signal });

        return () => {
            controller.abort(); // Cancel the fetch request if the component unmounts
        };
    }, []);

    return (
        <Container className="mt-4">
            {loading && <Spinner centered />}

            {error && <Message message={error?.message || error} color="danger" />}

            {data && (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {data.map(photo => (
                        <Col key={photo.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Img src={photo.url} />
                                    <Card.ImgOverlay src={photo.thumbnailUrl} />
                                    <Card.Title>Photo ID: {photo.id}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Album ID: {photo.albumId}</Card.Subtitle>
                                    <Card.Text>{photo.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}