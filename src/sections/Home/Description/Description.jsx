import React from 'react'
import classes from './Description.module.css'
import DescriptionPara from './Description-para/DescriptionPara'
import DescriptionPlayer from './Description-player/DescriptionPlayer'
import DescriptionTicket from './Description-ticket/DescriptionTicket'

function Description() {
  return (
    <section className={classes.description}>
      <DescriptionPara/>
      <DescriptionPlayer/>
      <DescriptionTicket/>
    </section>
  )
}

export default Description
