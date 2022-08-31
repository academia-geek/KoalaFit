import React from 'react'
import HomeHeader from '../Components/HomeHeader'
import HomeExperts from '../Components/HomeExperts'
import HomeWWA from '../Components/HomeWWA'

const PaginaHome = () => {
  return (
    <div>
        <HomeHeader />
        <HomeWWA />
        <HomeExperts />
    </div>
  )
}

export default PaginaHome