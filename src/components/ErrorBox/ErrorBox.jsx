import React from 'react'
import classes from './ErrorBox.module.css'
import { useDispatch } from 'react-redux'
import {resetErrorMessage} from '../../app/Players/player.slice.js'

function ErrorBox() {

    const dispatch = useDispatch();

    function handleClick() {
      dispatch(resetErrorMessage());
    } 

  return (
    <div className={classes.errorBox}>
      <div>
        <p>We are unable to fetch the data from the server, but dont you worry we provided you with dummy data</p>
        <button
        onClick={handleClick}
        >OK!</button>
      </div>
    </div>
  )
}

export default ErrorBox
