import React from 'react'
import classes from './Hero.module.css'
import playerBanner from '../../../assets/Images/players/player-banner.png'
import playerOnBanner from '../../../assets/Images/players/playerOnBanner.png'

function Hero() {
  return (
    <section className={classes.players}>
      <div>
        <img
        src={playerBanner} 
        alt="player banner"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-mirror="true"
        // data-aos-anchor-placement="top-center"
        />
        <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="fadeDown10"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
        data-aos-anchor-placement="top-center"
        >Players</h1>
      </div>
      <div>
        <img 
        src={playerOnBanner} 
        alt="player on banner" 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="-200"
        />
      </div>
    </section>
  )
}

export default Hero
