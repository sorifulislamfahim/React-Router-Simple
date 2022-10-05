import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMark = () => {
    const data = [
        {
          name: 'Page A',
          marks: 4000,
          quize: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          marks: 3000,
          quize: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          marks: 2000,
          quize: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          marks: 2780,
          quize: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          marks: 1890,
          quize: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          marks: 2390,
          quize: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          marks: 3490,
          quize: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <LineChart width={900} height={400} data={data}>
            <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            </LineChart>
            
        </div>
    );
};

export default AssignmentMark;