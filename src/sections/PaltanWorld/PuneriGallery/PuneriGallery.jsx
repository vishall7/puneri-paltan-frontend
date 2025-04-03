import React from "react";
import Banner from "../../../components/Banner/Banner";
import background from "../../../assets/Images/paltan-world/gallerybanner.jpg";
import playerOnBanner from "../../../assets/Images/paltan-world/gallarybannerplayer.png";
import mobileBackground from "../../../assets/MobileView-Images/puneri-gallery-mob-banner-s11.jpg";
import MediaGrid from "../../../components/MediaGrid/MediaGrid";
import SeasonBtn from "../../../components/SeasonBtn/SeasonBtn";
import PaltanWorldRow from "../../../components/PaltanWorldRow/PaltanWorldRow";
import { useSelector } from "react-redux";
import { paltanWorldData } from "../../../utils/dummyData.js";

function PuneriGallery() {
  const gallery = useSelector((state) => state.gallery.galleryImages); 

  return (
    <div>
      <Banner
        playerImg={playerOnBanner}
        textOnBanner="Gallery"
        background={background}
        mobileBackground={mobileBackground}
        playerImgSize={"100%"}
      />
      <div className="media">
        <div className="btnDiv">
          <SeasonBtn season={"Season 11"} isActive={true} />
        </div>
        <MediaGrid
          type="image"
          data={gallery || paltanWorldData}
          cellSize={window.innerWidth > 1024 ? "58vh" : ""}
        />
      </div>
      <PaltanWorldRow/>
    </div>
  );
}

export default PuneriGallery;
