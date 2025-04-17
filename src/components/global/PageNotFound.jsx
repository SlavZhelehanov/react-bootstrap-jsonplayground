import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function PageNotFound() {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <img
                        src="/assets/404.png"
                        alt="404 Not Found"
                        className="img-fluid mb-4"
                    />
                    <h1 className="display-4">Oops! Page Not Found</h1>
                    <p className="lead">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Button href="/" variant="primary" className="mt-3">
                        Go Back to Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}