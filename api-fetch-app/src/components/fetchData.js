import React, {useEffect, useState} from "react";
import config from "../services/configFile";

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const initApp = async () => {
            try {
                const response = await fetch(config.apiUrl);
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
            initApp();
    }, []);

    return (
        <div>
            <h1>Fetch Data Component</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FetchData;