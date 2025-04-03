import React from "react";
import classes from "./Banner.module.css";
import bannerSign from "../../assets/Images/players/player-banner.png";
import playerOnBanner from "../../assets/Images/players/playerOnBanner.png";

function Banner({
  playerImg,
  textOnBanner,
  background,
  mobileBackground,
  playerImgSize,
}) {
  return (
    <section
      className={classes.banner}
      style={{
        backgroundImage: `url(${
          window.innerWidth < 768 ? mobileBackground : background
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <img src={bannerSign} alt="banner sign" />
        <div>
          <h1>{textOnBanner || "players"}</h1>
        </div>
      </div>
      <div>
        <img
          src={playerImg || playerOnBanner}
          alt="player on banner"
          style={playerImgSize ? { width: playerImgSize } : {}}
        />
      </div>
    </section>
  );
}

export default Banner;
