import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InternetEconomy = () => {
  const [economy, setEconomy] = useState([]);

  useEffect(() => {
    const fetchEconomy = async () => {
      const result = await axios.get('/api/economy');
      setEconomy(result.data);
    };

    fetchEconomy();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Internet Economy</h2>
      <ul>
        {economy.map((item) => (
          <li key={item._id}>
            {item.sector}: {item.growth}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternetEconomy;
