
import React from 'react';
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample data for the visitor chart
const data = [
  { name: 'Mar 1', visitors: 300 },
  { name: 'Mar 5', visitors: 500 },
  { name: 'Mar 10', visitors: 450 },
  { name: 'Mar 15', visitors: 550 },
  { name: 'Mar 20', visitors: 900 },
  { name: 'Mar 25', visitors: 600 },
  { name: 'Mar 30', visitors: 800 },
];

const VisitorChart = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -20,
            bottom: 5,
          }}
        >
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#6b7280', fontSize: 10 }} 
            axisLine={false} 
            tickLine={false}
          />
          <YAxis 
            tick={{ fill: '#6b7280', fontSize: 10 }}
            domain={[0, 'dataMax + 100']}
            axisLine={false} 
            tickLine={false}
            width={35}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e1e2d', 
              border: 'none',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#fff'
            }} 
          />
          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#fff"
            strokeWidth={1.5}
            dot={{ stroke: '#fff', strokeWidth: 1, r: 3, fill: '#1e1e2d' }}
            activeDot={{ stroke: '#fff', strokeWidth: 1, r: 4, fill: '#1e1e2d' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorChart;
