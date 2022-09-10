import React, { useEffect, useState } from 'react'
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
import { retosPorFecha } from '../helpers/retosPorFecha';



const DashboardGraphic = () => {
  const idUser = localStorage.getItem("idUserLogin")
  const [historial, setHistorial] = useState()
  useEffect(()=>{
    retosPorFecha(setHistorial, idUser)
  },[])
  
  
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

   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' , //as const
      },
    },
  };
  
  // Tiempo en semana debe ser un arreglo
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   const data = {
    labels,
    datasets: [
      {
        fill: true, 
        label: 'Challenges',
        data: historial ? historial : '' ,
        borderColor: 'rgb(15,193,133)',
        backgroundColor: 'rgba(205, 249, 232,0.5)',
      },
    ],
  };

  

  return (
    <div className=' w-full max-w-7xl mx-auto flex justify-center items-center mb-4'>
        <div className='w-11/12 mt-4'>

        <Line options={options} data={data}  />
        </div>
    </div>
  )
}

export default DashboardGraphic