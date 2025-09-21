import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProjectionsChart = () => {
  const data = [
    { month: 'Jan', projections: 8, actuals: 12 },
    { month: 'Feb', projections: 15, actuals: 18 },
    { month: 'Mar', projections: 12, actuals: 15 },
    { month: 'Apr', projections: 18, actuals: 22 },
    { month: 'May', projections: 15, actuals: 18 },
    { month: 'Jun', projections: 20, actuals: 25 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
        <Bar dataKey="projections" fill="#90caf9" radius={[2, 2, 0, 0]} />
        <Bar dataKey="actuals" fill="#1976d2" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProjectionsChart;
