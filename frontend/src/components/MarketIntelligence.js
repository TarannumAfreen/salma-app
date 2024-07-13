import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarketIntelligence = () => {
  const [intelligence, setIntelligence] = useState([]);

  useEffect(() => {
    const fetchIntelligence = async () => {
      const result = await axios.get('/api/intelligence');
      setIntelligence(result.data);
    };

    fetchIntelligence();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Market Intelligence</h2>
      <ul>
        {intelligence.map((item) => (
          <li key={item._id}>
            {item.metric}: {item.analysis}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketIntelligence;
