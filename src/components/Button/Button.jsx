import React from 'react'
import classes from "./Button.module.css"
import { useNavigate } from 'react-router-dom'

function Button({text = "enter", style, className, navigateTo, ...props}) {
  const navigate = useNavigate()
  function handleNavigation(){ 
    if(navigateTo){      
      navigate(navigateTo)
    }
  }

  return (
    <button 
    onClick={handleNavigation}
    {...props} style={style} className={`${classes.button} ${className}`}>{text}</button>
  )
}

export default Button
