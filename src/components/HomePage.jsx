import Container from 'react-bootstrap/Container';
import { Link } from 'react-router';

export default function HomePage() {
    return (
        <Container>
            <main className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                                    <h2 className="fs-4 fw-bold"><Link to="/users"><i className="fa fa-users" aria-hidden="true"></i> All Users</Link></h2>
                                    <p className="mb-0">Table of all registered users</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                                    <h2 className="fs-4 fw-bold"><Link to="/posts"><i className="fa fa-clipboard" aria-hidden="true"></i> All Posts</Link></h2>
                                    <p className="mb-0">Grid of all created posts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading"></i></div>
                                    <h2 className="fs-4 fw-bold"><Link to="/albums"><i className="fa fa-picture-o" aria-hidden="true"></i> All Albums</Link></h2>
                                    <p className="mb-0">Grid of all created albums</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap"></i></div>
                                    <h2 className="fs-4 fw-bold"><Link to="/photos"><i className="fa fa-address-book-o" aria-hidden="true"></i> All Photos</Link></h2>
                                    <p className="mb-0">Grid of all created albums</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code"></i></div>
                                    <h2 className="fs-4 fw-bold">Simple clean code</h2>
                                    <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check"></i></div>
                                    <h2 className="fs-4 fw-bold">A name you trust</h2>
                                    <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>
        </Container>
    );
}