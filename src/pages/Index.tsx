
import React from 'react';
import { Link } from 'react-router-dom';
import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';

const Index = () => {
  return (
    <div className="dark">
      <div className="p-4">
        <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back to Dashboard
        </Link>
      </div>
      <AnalyticsDashboard />
    </div>
  );
};

export default Index;
