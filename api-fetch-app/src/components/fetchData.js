import React, { useEffect, useState } from "react";
import config from "../services/configFile";
import SkeletonTable from "./SkeletonTable";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initApp = async () => {
      try {
        const response = await fetch(config.apiUrl);
        const responseData = await response.json();

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    initApp();
  }, []);

  return (
    <div>
      <h1>Fetch Data Component</h1>
      <div className="table-container">
      {loading ? (
        <SkeletonTable />
      ) : (
        <table>
          <colgroup>
            <col style={{ width: "60px" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "70%" }} />
          </colgroup>
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
      )}
      </div>
    </div>
  );
};

export default FetchData;
