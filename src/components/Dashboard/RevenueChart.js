import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChart = () => {
  const data = [
    { month: 'Jan', current: 8, previous: 12 },
    { month: 'Feb', current: 15, previous: 18 },
    { month: 'Mar', current: 12, previous: 15 },
    { month: 'Apr', current: 18, previous: 22 },
    { month: 'May', current: 15, previous: 18 },
    { month: 'Jun', current: 20, previous: 25 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="month" 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#666' }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#666' }}
          domain={[0, 40]}
          ticks={[0, 10, 20, 30, 40]}
          tickFormatter={(value) => `${value}M`}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="current" 
          stroke="#90caf9" 
          strokeWidth={3}
          dot={{ fill: '#90caf9', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#90caf9', strokeWidth: 2 }}
        />
        <Line 
          type="monotone" 
          dataKey="previous" 
          stroke="#000000" 
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ fill: '#000000', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#000000', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
