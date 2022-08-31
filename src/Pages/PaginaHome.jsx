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
        <HomeWWA />
        <HomeExperts />
    </div>
  )
}

export default PaginaHome