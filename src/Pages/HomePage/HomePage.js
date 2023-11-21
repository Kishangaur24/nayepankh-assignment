import React from 'react'
import FrontPage from '../../Component/FrontPage/FrontPage'
import AboutUs from '../../Component/AboutUs/AboutUs'
import GetInTouch from '../../Component/GetInTouch/GetInTouch'
import ControlledCarousel from '../../Component/Carousel/Carousel1'
// import Navbar from "../../Component/Navbar"
import Header from '../../Component/Navbar/Header'
import FeedbackForm from '../../Component/Feedback/Feedback'

import style from "./HomePage.module.css"
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  const navigate = useNavigate()
  function handleFeedback(){
    navigate("/feedback")
  }
  return (
    <div className={style.main}>
    <Header/>
  <FrontPage/>
  <AboutUs/>
  <ControlledCarousel/>
  <GetInTouch/>
  {/* <FeedbackForm/> */}
  <button className={style.btn} onClick={handleFeedback}>Give feedback</button>
    </div>
  )
}

export default HomePage
