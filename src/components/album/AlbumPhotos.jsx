import { Link, useParams } from "react-router"
import { Card, Col, Row } from "react-bootstrap";
import { useEffect } from "react";

import useFetch from "../../hooks/UseFetch";
import Spinner from "../global/Spinner";
import Message from "../global/Message";


export default function AlbumPhotos() {
    const { id } = useParams();
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        if (data) return;
        get(`/albums/${id}/photos`);
    }, [id, get, data]);

    return (<>
        {loading && <Spinner />}

        {error && <Message message={error?.message || error} color="danger" />}

        {data && (
            <Row xs={1} md={2} lg={3} className="g-4">
                {data.map(photo => (
                    <Col key={photo.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Photo ID: {photo.id}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Album ID: {photo.albumId}</Card.Subtitle>
                                <Card.Img variant="top" src={photo.url} alt={photo.id}/>
                                <Card.Text>{photo.title}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )}
    </>);
}