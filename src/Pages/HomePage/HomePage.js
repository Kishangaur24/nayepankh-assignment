import React from 'react'
import FrontPage from '../../Component/FrontPage/FrontPage'
import AboutUs from '../../Component/AboutUs/AboutUs'
import GetInTouch from '../../Component/GetInTouch/GetInTouch'
import ControlledCarousel from '../../Component/Carousel/Carousel1'

const HomePage = () => {
  return (
    <div>
  <FrontPage/>
  <AboutUs/>
  <ControlledCarousel/>
  <GetInTouch/>
    </div>
  )
}

export default HomePage
