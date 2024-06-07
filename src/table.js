import React, { useState } from 'react';

const XTable = () => {
  // Initial data state
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  // State to track sorting criteria
  const [sortBy, setSortBy] = useState(null);

  // Function to handle sorting
  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => {
      if (key === 'date') {
        return new Date(b.date) - new Date(a.date) || b.views - a.views;
      } else if (key === 'views') {
        return b.views - a.views || new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
    setData(sortedData);
    setSortBy(key);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={() => handleSort('date')}>Sort by Date</button>
      <button onClick={() => handleSort('views')}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
