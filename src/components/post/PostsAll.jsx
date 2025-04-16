import { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

import useFetch from "../../hooks/UseFetch";
import Spinner from "../global/Spinner";
import Message from "../global/Message";

export default function PostsAll() {
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get(`posts`);
    }, []);

    return (
        <Container className="mt-4">
            {loading && <Spinner />}

            {error && <Message message={error?.message || error} color="danger" />}

            {data && (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {data.map(post => (
                        <Col key={post.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Post ID: {post.id}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">User ID: {post.userId}</Card.Subtitle>
                                    <Card.Text>{post.title}</Card.Text>
                                    <Link to={`/posts/${post.id}/comments`}><i className="fa fa-comments-o" aria-hidden="true"></i> Comments</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}