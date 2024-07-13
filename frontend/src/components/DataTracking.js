import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataTracking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/data');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Data Tracking</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataTracking;
