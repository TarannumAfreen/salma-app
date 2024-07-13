import React from 'react';
import DataTracking from '../components/DataTracking';
import MarketIntelligence from '../components/MarketIntelligence';
import InternetEconomy from '../components/InternetEconomy';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DataTracking />
        <MarketIntelligence />
        <InternetEconomy />
      </div>
    </div>
  );
};

export default Dashboard;
