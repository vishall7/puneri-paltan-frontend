import React from 'react'
import classes from './Partners.module.css'
import forceMotors from '../../../assets/Partners/force_motors.png'
import hint from '../../../assets/Partners/hint_logo.png'
import f1 from '../../../assets/Partners/F1-Focus11_logo.png'
import icon from '../../../assets/Partners/icon-logo.png'
import radio from '../../../assets/Partners/radio.png'
import korloskar from '../../../assets/Partners/korloskar-brother-logo.png'
import shivNaresh from "../../../assets/Partners/shiv-naresh-logo.png"
import stihl from "../../../assets/Partners/stihl-logo.png"
import vikram from "../../../assets/Partners/vikram-tea.png"
import batery from "../../../assets/Partners/Batery-Ai_logo.png"

function Partners() {
  return (
    <div className={classes.partners}>
      <h1
      data-aos="bouncing-zoom-in"
      >Partners</h1>
      <div className={classes.logos}>
        <div>
          <div>
            <img src={forceMotors} alt="force motors" />
            <h6>Principal Partners</h6>
          </div>
        </div>
        <div>
          <div>
            <img src={batery} alt="batery ai" />
            <h6>Powered By</h6>
          </div>
          <div>
            <img src={korloskar} alt="korloskar brothers" />
            <h6>Associate Partners</h6>
          </div>
        </div>
        <div>
          <div>
            <img src={stihl} alt="stihl" />
            <h6>Co-Partners</h6>
          </div>
          <div>
            <img src={vikram} alt="vikram tea" />
            <h6>Co-Partners</h6>
          </div>
          <div>
            <img src={hint} alt="hint" />
            <h6>Co-Partners</h6>
          </div>
          <div>
            <img src={f1} alt="f1 focus11" />
            <h6>Co-Partners</h6>
          </div>
        </div>
        <div>
          <div>
            <img src={radio} alt="radio" />
            <h6>Radio Partners</h6>
          </div>
          <div>
            <img src={icon} alt="icon" />
            <h6>Travel Partners</h6>
          </div>          
          <div>
            <img src={shivNaresh} alt="shiv naresh" />
            <h6>Kit Partners</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
