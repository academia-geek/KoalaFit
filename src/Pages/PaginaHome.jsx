import React, { useContext } from 'react'
import HomeHeader from '../Components/HomeHeader'
import HomeExperts from '../Components/HomeExperts'
import HomeWWA from '../Components/HomeWWA'
import HomeMainContent from '../Components/HomeMainContent'
import { Context } from '../Context/ContextProvider'


const PaginaHome = () => {

  const { showModal, handleModal, showModal2,handleModal2 } = useContext(Context)

  return (
    <div>
      <HomeHeader />
      <HomeMainContent />
      {
        (showModal || showModal2) === true
          ?
          null
          :
          <>
            <HomeWWA />
            <HomeExperts />
          </>
      }

    </div>
  )
}

export default PaginaHome