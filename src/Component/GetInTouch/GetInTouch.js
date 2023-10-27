import React from 'react'
import style from "./GetInTouch.module.css"
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
const GetInTouch = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <h1>Get in touch</h1>
        <p>
        <p>Career@nayepankh.com</p>
        <p>WhatsApp: +91-6306266557</p>
        <p>Calling: +91- 8318500748</p>
        <p>Office Address: 104A/279 P.Road Kanpu</p>
        <p>Pin Code: 208012</p></p>
        <div className={style.icon}>
          <BsTwitter/>
          <BsFacebook/>
          <BsInstagram/>
          <BsYoutube/>
        </div>
      </div>
      <div className={style.image}>
        <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=432,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-15-at-9.17.30-pm-AVLPXr08jETq2nyv.jpeg'/>
      </div>
    </div>
  )
}

export default GetInTouch
