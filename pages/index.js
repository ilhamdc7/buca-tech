import React from 'react'
import Header from '../Components/Header/header'
import PersonalProfile from '../Components/PersonalProfile/PersonalProfile'
import HowDoWeWork from '../Components/HowDoWeWork/howdowework'
import UserCounter from '../Components/UserCounter/UserCounter'
import Pricing from '../Components/Pricing/Pricing'
import Footer from '../Components/Footer/Footer'

const index = () => {
  return (
    <div>
        <Header/>
        <PersonalProfile/>
        <HowDoWeWork/>
        <UserCounter/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default index
