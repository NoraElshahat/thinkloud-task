import React, { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
  datasets: [
    {
      label: 'Mobil Count',
      data: [10, 20, 30, 40, 50, 60, 70], // should contain real value
      fill: false,
      borderColor: '#742774',
    },
  ],
};
export default function BarChart(props) {
  const [count, updateCount] = useState({});
  useEffect(() => {
    const countM = props.count;
    updateCount(countM);
  }, []);
  return <Bar data={data} />;
}
