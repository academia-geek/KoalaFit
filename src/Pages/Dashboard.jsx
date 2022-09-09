import { DashboardMainContent } from "../Components/DashboardMainContent"
import DashboardHistory from "../Components/DashboardHistory"
import DashboardNavBar from "../Components/DashboardNavBar"
import DashboardProfile from "../Components/DashboardProfile"
import DashboardRetos from "../Components/DashboardRetos";
import DashboardRanking from "../Components/DashboardRanking";
import React, { useContext, useState,useEffect } from "react";
import { Context } from "../Context/ContextProvider";
import { getAuth } from "firebase/auth";

const Dashboard = ({dataUser}) => {
  const { id } = useContext(Context)
  const [switchDashboard, setSwitchDashboard] = useState('1')
  


  useEffect(() => {
    setSwitchDashboard(id)
  }, [id])

  useEffect(()=>{
    const data = {
      displayName: dataUser.displayName,
    }
  },[dataUser.displayName])

  

  return (
    <div className='bg-gradient-to-tr from-[#CDF9E8] to-transparent h-screen w-screen overflow-y-scroll'>

      <DashboardNavBar />
      {
        switchDashboard === "1"
          ?
          <div className=' flex-col justify-around py-8  lg:flex-row items-center lg:mt-0  2xl:px-24 px-10 gap-24 flex relative  '>
            <DashboardProfile />
            <DashboardMainContent />
          </div>
          :
          switchDashboard === "2"
            ?
            <div className='h-[800px] lg:flex-row items-center m-auto py-28 lg:py-36 2xl:px-24 px-4 gap-24  '>
              <DashboardRetos />
            </div>
          :
          switchDashboard === "3"
           ?
          <DashboardRanking/>
          :
          switchDashboard === "4"
          ?
          <DashboardHistory />
          :
          (setSwitchDashboard('1'))

      }
    </div>
  )
}

export default Dashboard