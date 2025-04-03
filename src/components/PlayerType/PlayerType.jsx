import React from 'react'
import classes from './PlayerType.module.css'

function PlayerType({type="Player", ...props}) {
  return (
    <div className={classes.playerType} {...props}>
      <h1>{type}</h1>
    </div>
  )
}

export default PlayerType
