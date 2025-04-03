import React, { useState, useEffect } from "react";
import classes from "./SinglePlayer.module.css";
import { useParams } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import playerBanner from "../../../assets/Images/players/player-image.png";
import playerImg from "../../../assets/Images/players/player-full.png";
import playerBannerMob from "../../../assets/Images/players/playerbannermob.png";
import PlayerType from "../../../components/PlayerType/PlayerType";
import { useNavigate } from "react-router-dom";

function Title({ title }) {
  return (
    <div className={classes.title}>
      <h2>{title || "Player"}</h2>
    </div>
  );
}

function InfoDisplay({ title, info, background, width = "" }) {
  return (
    <div 
    className={`${classes.infoDisplay}`} style={{ width: width }}
    data-aos="bouncing-zoom-in"
    data-aos-duration="500"
    >
      <div style={{ backgroundColor: background }}>
        <h1>{info || 33}</h1>
      </div>
      <div>
        <h3>{title || "Matches Played"}</h3>
      </div>
    </div>
  );
}

function SinglePlayer() {
  const { slug } = useParams();
  const [index, setIndex] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const {players} = useSelector((state) => state.players);
  const navigate = useNavigate();

  // console.log('store sets in single player', isLoading)

  function clickNext() {
    setIndex((prevIndex) => (prevIndex + 1) % players.length);
  }

  function clickPrev() {
    setIndex((prevIndex) => (prevIndex - 1 + players.length) % players.length);
  }

  const playerName = slug.split("-").join(" ").toLowerCase();

  const playerSelector = createSelector(
    [(state) => state.players.players],
    (players) =>
      players.find((player) => player.name.toLowerCase() === playerName)
  );

  const player = useSelector(playerSelector);

  function getSlides() {
    if(slidesToShow === 1) {    
      return [players[randomIndex]];
    } else {
      return [
        players[index],
        players[(index + 1) % players.length],
      ];
    }   
  }

  const nameDividder = (name) => {
    return name.split(" ");
  };

  function handleNavigation(name) {
    const slug = name.replace(/\s/g, "-").toLowerCase();
    navigate(`/player/${slug}`);
  }

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * players.length);
    setRandomIndex(randomNum);    
    function resize(){
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      }else {
        setSlidesToShow(2);
      }
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [player, window.innerWidth]);

  return (
    <div className={classes.singlePlayer}>
      <img src={player.banner_image || playerBanner} alt="banner image" />
      <img
        src={player.mobile_image || playerBannerMob}
        alt="banner on mobile"
      />

      <div className={classes.playerInfo}>
        <div className={classes.playerImage}>
          <img src={player.full_image || playerImg} alt="player full image" />
        </div>
        <div className={classes.playerDetails}>
          {/* jersey no and position */}
          <div>
            <div>
              <Title title="Jersey no." />
              <p>{player.jersey_no || "21"}</p>
            </div>
            <div>
              <Title title="position" />
              <p>{player.position || "Raider"}</p>
            </div>
          </div>
          {/* vitals */}
          <div>
            <Title title="Vitals" />
            <div className={classes.table}>
              <div>
                <h3>Name</h3>
                <h3>{player.name || "pankaj Mohite"}</h3>
              </div>
              <div>
                <h3>Date of birth</h3>
                <h3>{player.date_of_birth || "01-01-1999"}</h3>
              </div>
              <div>
                <h3>Nationality</h3>
                <h3>{player.nationality || "India"}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.statistics}>
        <h1>Statistics</h1>
        <div className={classes.overall}>
          <PlayerType type="Overall" />
          <InfoDisplay
            title="Matches played"
            info={player.Matches_played || 33}
          />
          <InfoDisplay
            title="Total Points earned"
            info={player.total_points_earned || 33}
          />
          <InfoDisplay
            title="most Points in a match"
            info={player.most_points_in_a_match || 7}
          />
          <InfoDisplay
            title="not out percentage"
            info={player.not_out_percentage.replace("%", "") || 33}
          />
        </div>
        {/* raid */}
        <div className={classes.raidTackle}>
          <PlayerType type="Raid" />
          <div>
            <InfoDisplay
              title="no of super raids"
              background="#EDEEF2"
              info={player.no_of_super_raids || 10}
              width={window.innerWidth > 768 ? "48%" : "100%"}
            />
            <InfoDisplay
              title="super 10s"
              background="#EDEEF2"
              info={player.super_10s || 3}
            />
            <InfoDisplay
              title="avg. raid points"
              background="#EDEEF2"
              info={player.avg_raid_points || 3}
              width={window.innerWidth > 768 ? "48%" : "100%"}
            />
          </div>
          <div>
            <div className={classes.circle}>
              <div>
                <p>Total raid</p>
                <h1>{player.total_raid || 15}</h1>
              </div>
            </div>
            <div>
              <div className={classes.strike}>
                <div>
                  <h1>53.14%</h1>
                </div>
                <p>raid strike rate</p>
              </div>
            </div>
          </div>
        </div>
        {/* tackle */}
        <div className={`${classes.raidTackle} ${classes.tackle}`}>
          <PlayerType type="Tackles" />
          <div>
            <InfoDisplay
              title="no of super tackles"
              info={player.no_of_super_tackles || 10}
              width={window.innerWidth > 768 ? "45%" : "100%"}
            />
            <InfoDisplay
              title="total tackle points"
              info={player.total_tackle_points || 3}
            />
          </div>
          <div>
            <div className={`${classes.circle} ${classes.tackleCircle}`}>
              <div>
                <p>Total tackle</p>
                <h1>15</h1>
              </div>
            </div>
            <div>
              <div className={classes.strike}>
                <div>
                  <h1>20%</h1>
                </div>
                <p>tackle strike rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.otherPlayers}>
        <h1>Other Players</h1>

        <div className={classes.playersDiv}>
          {getSlides().map((player) => (
            <div
              key={player._id}
              className={classes.slide}
              onClick={() => handleNavigation(player?.name)}
            >
              <div>
                <h1>{nameDividder(player?.name)[0]}</h1>
                <h1>{nameDividder(player?.name)[1]}</h1>
                <p>{player.category}</p>
              </div>
              <div>
                <img src={player?.full_image || playerImg} alt="player" />
              </div>
            </div>
          ))}
          <button className={classes.prev} onClick={clickPrev}>
            <span></span>
          </button>
          <button className={classes.next} onClick={clickNext}>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePlayer;
