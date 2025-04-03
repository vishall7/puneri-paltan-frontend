import React from 'react'
import classes from './PaltanWorld.module.css'
import paltanWorldImage from '../../assets/Images/paltan-world/paltan-world-banner-desktop-s11.png'
import { useNavigate } from 'react-router-dom'

function PaltanWorld() {

    const navigate = useNavigate();
    
    const handlePuneriTv = () => {
        navigate("/puneri-tv")
    }

    const handlePuneriGallery = () => {
        navigate("/puneri-gallery")
    }

    const handleWallpapers = () => {
        navigate("/wallpapers")
    }

    const handleBlogs = () => {
        navigate("/blogs")
    }

  return (
    <section>
        <div className={classes.paltanWorld}></div>
        <div className={classes.grid}>
            <div onClick={handlePuneriTv}>
                <h1>Puneri tv</h1>
            </div>
            <div onClick={handlePuneriGallery}>
                <h1>Gallery</h1>
            </div>
            <div onClick={handleWallpapers}>
                <h1>wallpapers</h1>
            </div>
            <div onClick={handleBlogs}>
                <h1>blogs</h1>
            </div>
        </div>
    </section>
  )
}

export default PaltanWorld
