  import React from 'react'
  import classes from './SeasonBtn.module.css'

  function SeasonBtn({season, onClick, isActive}) {
    return (
      <button
      className={`${classes.seasonBtn} ${isActive ? classes.active : ""}`}
      onClick={onClick}
      >
        {season}
      </button>
    )
  }

  export default SeasonBtn
