import React from 'react'
import classes from './DescriptionPara.module.css'
import { Container } from 'react-bootstrap'

function DescriptionPara() {
  return (
    <Container>
      <div className={classes.descriptionPara}>
        <div className={classes.heading}>
          <h6>scroll</h6>
        </div>
        <div>
          <p>Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that consistently looks forward to perform better, challenge its opponents and make a difference.</p>
        </div>
      </div>
    </Container>
  )
}

export default DescriptionPara;
