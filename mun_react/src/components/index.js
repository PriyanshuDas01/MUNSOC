import React from 'react'
import './index.css'

function Index() {
  return (
    <>
      <div className="back">
        <video className="vid" autoPlay muted loop src="back.webmhd.webm" />

        {/* <img className="backimg" alt="" src="back.png" /> */}
        {/* <div className='blurbox'></div> */}
        <div className='headtext'>
          <div className="model-united-nations ">MODEL UNITED NATIONS</div>
          <div className="nit-agartala">NIT AGARTALA</div>
          <div className="date">6th-7th Jan 2024</div>
          <div className="buttonr"><button><a href="https://unstop.com/p/nita-mun-2024-munsoc-nit-agartala-832216">REGISTER</a></button></div>
       
        </div>
      </div>
    </>
  )
}

export default Index