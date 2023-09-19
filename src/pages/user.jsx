import { useEffect, useState } from "react";
import { backendUrl } from "../config";
import { useNavigate } from "react-router-dom";
import './user.css';

function People() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const handleclick = () => {
        navigate("/url");
    };

    const handleclicktable = () => {
        navigate("/table");

    };

    const handleclicklogout = () => {
        localStorage.removeItem('user');
        navigate("/login");
    };

    const email = JSON.parse(localStorage.getItem('user'));

    const fetchUser = async () => {
        const responce = await fetch(`${backendUrl}/auth/dashboard/${email.email}`);
        const data = await responce.json();
        console.log(data)
        setUsers(data);
    }
    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(users.Urls);

    return (
        <div className="box">
            <nav className=" mainbox navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <h1 className=" navbar-brand display-4">URL Shortener</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbarbtn" id="navbarNavDropdown">

                        <div className="navbarbtn">
                            <button className="btn btn-primary" onClick={handleclicktable}>
                                List All Url
                            </button>
                            <button className="btn btn-primary" onClick={handleclick}>
                                Create URL
                            </button>
                            <button className="btn btn-primary" onClick={handleclicklogout}>
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    {/* <div>
                        <h1 className="display-4">Shorten URL</h1>
                    </div> */}

                </div>
                <h1 className='url'>Your Recent URL</h1>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title center">Your URL</h3>
                                <p className="card-text center">
                                    <a href={users.Url} target="_blank" rel="noopener noreferrer">{users.Url}</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title center">Short URL</h5>
                                <p className="card-text center">
                                    <a href={users.shortUrl} target="_blank" rel="noopener noreferrer">
                                        {users.shortUrl}
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default People;
