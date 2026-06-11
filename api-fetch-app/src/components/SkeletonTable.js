import React from "react";

const SkeletonTable = () => {
  return (
      <table>
        <colgroup>
          <col style={{ width: "60px" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "70%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(8)].map((_, index) => (
            <tr key={index}>
              <td>
                <div className="skeleton small"></div>
              </td>

              <td>
                <div className="skeleton"></div>
              </td>

              <td>
                <div className="skeleton"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default SkeletonTable;
