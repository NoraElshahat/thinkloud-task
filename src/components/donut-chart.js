import React from 'react';
import { Pie } from 'react-chartjs-2';

const state = {
  labels: ['Brand', 'mobile'],
  datasets: [
    {
      label: 'brands and mobile',
      backgroundColor: ['#B21F00', '#C9DE00'],
      hoverBackgroundColor: ['#003350', '#35014F'],
      data: [65, 59],
    },
  ],
};

export default function DonutChart() {
  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: 'Brands and Mobiles',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
}
