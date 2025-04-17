import { useEffect } from "react";
import { Link, useParams } from "react-router";

import "./user-profile.css";

import useFetch from "../../hooks/UseFetch";
import Spinner from "../global/Spinner";
import Message from "../global/Message";
import PageNotFound from "../global/PageNotFound";

export default function UserProfile() {
    const { param, value } = useParams()
    const { data, error, loading, get } = useFetch("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get(`users?${param}=${value}`);
    }, []);

    return (<>
        {loading && <Spinner />}

        {error && <Message content={error} color="danger" />}

        {data && 0 < data.length
            ? <section className="section about-section gray-bg" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">About Me</h3>
                                <h6 className="theme-color lead">
                                    {data[0].company.bs}
                                </h6>
                                <p>
                                    {data[0].company.catchPhrase}
                                </p>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Name</label>
                                            <p>{data[0].name}</p>
                                        </div>
                                        <div className="media">
                                            <label>Username</label>
                                            <p>{data[0].username}</p>
                                        </div>
                                        <div className="media">
                                            <label>Zip code</label>
                                            <p>{data[0].address.zipcode}</p>
                                        </div>
                                        <div className="media">
                                            <label>Address</label>
                                            <p>{data[0].address.street}, {data[0].address.city}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>E-mail</label>
                                            <p>{data[0].email}</p>
                                        </div>
                                        <div className="media">
                                            <label>Phone</label>
                                            <p>{data[0].phone}</p>
                                        </div>
                                        <div className="media">
                                            <label>Website</label>
                                            <p>{data[0].website}</p>
                                        </div>
                                        <div className="media">
                                            <label>Company</label>
                                            <p>{data[0].company.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar">
                                <img
                                    src={`https://robohash.org/${data[0].username}`}
                                    title={data[0].username}
                                    alt={data[0].username}
                                />
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="counter">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to={500} data-speed={500}>
                                        <Link to={`/users/${data[0].id}/albums`}>Albums</Link>
                                    </h6>
                                    {/* <p className="m-0px font-w-600">Happy Clients</p> */}
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to={150} data-speed={150}>
                                    <Link to={`/users/${data[0].id}/todos`}>TODOs</Link>
                                    </h6>
                                    {/* <p className="m-0px font-w-600">Project Completed</p> */}
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to={850} data-speed={850}>
                                    <Link to={`/users/${data[0].id}/posts`}>Posts</Link>
                                    </h6>
                                    {/* <p className="m-0px font-w-600">Photo Capture</p> */}
                                </div>
                            </div>
                            {/* <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to={190} data-speed={190}>
                                        190
                                    </h6>
                                    <p className="m-0px font-w-600">Telephonic Talk</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            : <PageNotFound />
        }
    </>)
}