import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';

export default function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand><NavLink to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink></Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link><NavLink to="/" className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/users" className={({ isActive }) =>
                            isActive ? "active" : ""
                        }> Users</NavLink></Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
            <br />
        </>
    );
}