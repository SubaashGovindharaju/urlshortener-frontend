import { useEffect, useState } from 'react';
import { backendUrl } from '../config';

const URLTable = () => {

    const [users, setUsers] = useState([]);



    const email = JSON.parse(localStorage.getItem('user'));

    const fetchUser = async () => {
        const responce = await fetch(`${backendUrl}/auth/dashboard/${email.email}`);
        const data = await responce.json();
        console.log(data)
        setUsers(data.Urls);
    }

    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    console.log(users)
    return (
        <div className="container mt-5">
            <h2 className="mb-4">URL Table</h2>
            <table className="table table-bordered table-striped">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Date</th>
                        <th>URL</th>
                        <th>Short URL</th>
                        <th>Click count</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                        <tr key={item._id}>
                            <td>{item.createdAt}</td>
                            <td>
                                <a
                                    href={item.Url}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {item.Url}
                                </a>
                            </td>
                            <td>
                                <a
                                    href={item.shortUrl}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {item.shortUrl}
                                </a>
                            </td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default URLTable;
