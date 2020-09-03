import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function GChart({ cases, recovered, deaths }) {


  return (
    <div>
      <Pie data={{
        labels: [
          'Total Cases',
          'Recovered',
          'Deaths'
        ],
        datasets: [{
          data: [cases, recovered, deaths],
          backgroundColor: [
            '#FFCE56',
            '#36A2EB',
            '#FF6384',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#36A2EB',
            '#FF6384',
          ]
        }]
      }}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true,
          responsive: true
        }}
      />
    </div>
  )
};