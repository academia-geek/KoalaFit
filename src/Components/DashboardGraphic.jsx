import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' , //as const
      },
    },
  };

  // Tiempo en semana debe ser un arreglo
  const labels = ['00', '01', '02', '03', '04', '05',];

  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Weight',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(15,193,133)',
        backgroundColor: 'rgba(205, 249, 232,0.5)',
      },
    ],
  };

const DashboardGraphic = () => {
  return (
    <div className=' w-full max-w-7xl mx-auto flex justify-center items-center mb-4'>
        <div className='w-11/12 mt-4'>

        <Line options={options} data={data}  />
        </div>
    </div>
  )
}

export default DashboardGraphic