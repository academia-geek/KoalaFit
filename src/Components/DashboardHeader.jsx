import React, { useEffect, useState } from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import dashboardHeaderFitGirl from '../assets/img/dashboardHeaderFitGirl.png'
import { retosTiempo } from '../helpers/totalCaloriesBurned'

const DashboardHeader = () => {
    const idUser = localStorage.getItem("idUserLogin")
    const [retos, setRetos] = useState()
    const [tiempo, setTiempo] = useState()
    const dt = new Date()
    const fecha = (`${dt.getDate()}/${dt.getMonth()+1}/${dt.getFullYear()}`)

    useEffect(()=>{
        retosTiempo(setRetos, setTiempo, idUser)
    },[])

  return (
    <header className=' w-full max-w-7xl mx-auto h-40 flex items-center justify-center'>
        <div className='flex h-4/5 sm:h-2/3 bg-secondary rounded-3xl items-center justify-evenly relative w-11/12'>
        <figure className='absolute left-[0%] hidden 4xl:block '>
            <img src={dashboardHeaderFitGirl} alt="" className='h-36' />
        </figure>
        <div className='w-2/5 sm:w-max'>
            <h1 className='text-primary font-bold text-xl'>Challenges Today</h1>
            <p className='text-greyColor font-normal text-base text-center'>{retos}</p>
        </div>
        <div className='w-2/5 gap-2 flex flex-col items-center justify-center sm:gap-0 sm:flex-row sm:justify-between sm:w-3/5'>
        <div >
            <h1 className='text-primary  font-semibold '>Time</h1>
            <p className='text-primary  text-base flex  items-center justify-center gap-2 w-full'><AiOutlineClockCircle color='#3ecf9e' />{tiempo} min</p>
        </div>
        
        <div className='hidden sm:block'>
            <p className='text-primary  font-semibold '>Date</p>
            <p className='text-primary text-base '>{fecha}</p>
        </div>
        </div>
        </div>
    </header>
  )
}

export default DashboardHeader