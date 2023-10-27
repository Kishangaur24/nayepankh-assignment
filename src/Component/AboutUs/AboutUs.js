import React from 'react'
import style from "./AboutUs.module.css"
const AboutUs = () => {
  return (
    <div className={style.about}>
      <div className={style.image}>
        <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=892,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.03-am-YBgL64ZLPPI03WXe.jpeg' />  
      </div>
      <div className={style.content}>
        <h1>Think global, Act local.</h1>
        <p>"NayePankh Foundation" is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power and to make our vision successful we would require your vital support. Service to mankind is the service to god. Let’s revolutionise the society together!.</p>
        <div className={style.btn}>
        <button>Learn More</button>
        <button>Our Certificate</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
