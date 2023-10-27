import React from 'react'
import style from "./FrontPage.module.css"
const FrontPage = () => {
  return (
    <div className={style.main}>
        <div className={style.content}>
      <h1>It's that easy to bring a Smile on Their Faces</h1>
      <p>We don't ask for much, just help us with what you can- Be it Money, Skill or Your Time</p>
      <button className={style.btn}>Donate</button>
      </div>
    </div>
  )
}

export default FrontPage
