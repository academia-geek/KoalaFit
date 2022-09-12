import { DashboardMainContent } from "../Components/DashboardMainContent"
import DashboardHistory from "../Components/DashboardHistory"
import DashboardNavBar from "../Components/DashboardNavBar"
import DashboardProfile from "../Components/DashboardProfile"
import DashboardRetos from "../Components/DashboardRetos";
import DashboardRanking from "../Components/DashboardRanking";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/ContextProvider";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { CircularProgress } from "@chakra-ui/react";

const Dashboard = ({ dataUser }) => {
  const { id } = useContext(Context)
  const [switchDashboard, setSwitchDashboard] = useState('1')
  const [estado, setEstado] = useState()
  const idUser = localStorage.getItem("idUserLogin")

  useEffect(() => {
    setSwitchDashboard(id)
    auxHistory(setEstado)
  }, [id])

  const auxHistory = async (state) => {
    const auxHistory = []
    const raro = {
      auxHistory
    }
    const ref = doc(db, 'History', idUser)
    const perro = await getDoc(ref)

  

    if (!perro.data()) {
      await setDoc(doc(db, 'History', idUser), raro)
    }
    state(perro)
  }



  return (
    <>
      {
        estado ?
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
                  <DashboardRanking />
                  :
                  switchDashboard === "4"
                    ?
                    <DashboardHistory />
                    :
                    (setSwitchDashboard('1'))

          }
        </div>:
        <div className="h-screen w-screen relative  flex justify-center items-center">
          <div className="m-auto">
            <CircularProgress isIndeterminate color='green.300' size={200}/>
          </div>
        </div>
      }
    </>
  )
}

export default Dashboard