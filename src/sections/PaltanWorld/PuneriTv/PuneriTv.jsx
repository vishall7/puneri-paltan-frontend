import React, { useState } from "react";
import Banner from "../../../components/Banner/Banner";
import background from "../../../assets/Images/paltan-world/tvbanner.jpg";
import playerOnBanner from "../../../assets/Images/paltan-world/tvbannerplayer.png";
import mobileBackground from "../../../assets/MobileView-Images/puneri-tv-mob-banner-s11.jpg";
import MediaGrid from "../../../components/MediaGrid/MediaGrid";
import SeasonBtn from "../../../components/SeasonBtn/SeasonBtn";
import VideoModal from "../../../components/VideoModal/VideoModal";
import PaltanWorldRow from "../../../components/PaltanWorldRow/PaltanWorldRow";
import { paltanWorldData } from "../../../utils/dummyData.js";
import { useSelector } from "react-redux"; 
import {createSelector} from '@reduxjs/toolkit'

function PuneriTv() {

  const season10Selector = createSelector(
    (state) => state.tv.tv,
    (tv) => tv.filter((video) => video.season === "Season 10")
  );

  const season11Selector = createSelector(
    (state) => state.tv.tv,
    (tv) => tv.filter((video) => video.season === "Season 11")
  );

  const season10 = useSelector(season10Selector);
  const season11 = useSelector(season11Selector);

  const [season, setSeason] = useState("Season 11");
  const [seasonData, setSeasonData] = useState(season11);
  const [videoModal, setVideoModal] = useState(null);  

  function handleClick(season) {
    if(season === "Season 11"){
      setSeason("Season 11");
      setSeasonData(season11);
    } else{
      setSeason("Season 10");
      setSeasonData(season10);
    }
  }

  return (
    <div>
      <Banner
        playerImg={playerOnBanner}
        textOnBanner="Puneri TV"
        background={background}
        mobileBackground={mobileBackground}
      />
      <div className="media">
        <div className="btnDiv">
          <SeasonBtn
            onClick={() => handleClick("Season 11")}
            season={"Season 11"}
            isActive={season === "Season 11"}
          />
          <SeasonBtn
            onClick={() => handleClick("Season 10")}
            season={"Season 10"}
            isActive={season === "Season 10"}
          />
        </div>
        <MediaGrid data={seasonData || paltanWorldData} type="video" setVideoModal={setVideoModal} />
      </div>
      {videoModal && (
        <VideoModal setVideoModal={setVideoModal} videoModal={videoModal} />
      )}
      <PaltanWorldRow/>
    </div>
  );
}

export default PuneriTv;
