import React from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import DashboardGraphic from './DashboardGraphic'
export const DashboardMainContent = () => {
  return (
    <div className='border bg-[#FAFDFC] rounded-3xl shadow-md'>
        <DashboardHeader/>
        <DashboardGraphic/>
    </div>
  )
}
