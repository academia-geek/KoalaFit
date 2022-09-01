import React from 'react'
import HomeHeader from '../Components/HomeHeader'
import HomeExperts from '../Components/HomeExperts'
import HomeWWA from '../Components/HomeWWA'
import HomeMainContent from '../Components/HomeMainContent'

const PaginaHome = () => {
  return (
    <div>
        <HomeHeader />
        <HomeMainContent />
        <div className='bg-gradient-to-t from-mainBgColor via-white to-[#CDF9E8]'>
        <HomeWWA />
        <HomeExperts />
        </div>
    </div>
  )
}

export default PaginaHome