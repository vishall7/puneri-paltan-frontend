import React, { useEffect, useState } from "react";
import classes from "./SingleGallery.module.css";
import { useParams } from "react-router-dom";
import Banner from "../../../../components/Banner/Banner";
import background from "../../../../assets/Images/paltan-world/gallerybanner.jpg";
import playerOnBanner from "../../../../assets/Images/paltan-world/banner-img.png";
import mobileBackground from "../../../../assets/MobileView-Images/puneri-gallery-mob-banner-s11.jpg";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Download,
  Fullscreen,
  Share,
  Zoom,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useNavigate } from "react-router-dom";

function SingleGallery() {
  const navigate = useNavigate();
  const { galleryId } = useParams();
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const gallerySelector = createSelector(
    [(state) => state.gallery.galleryImages],
    (galleryImages) => galleryImages.find((gallery) => gallery.id === galleryId)
  );

  const imageSelectors = createSelector(
    [(state) => state.gallery.galleryImages],
    (galleryImages) =>
      galleryImages
        .filter((gallery) => gallery.id !== galleryId)
        .sort((a, b) => b.id - a.id)
  );

  const previousAndNext = useSelector(imageSelectors);

  const { match_images, name } = useSelector(gallerySelector) || {};

  const images = (match_images || []).map((image) => ({
    src: image || playerOnBanner,
  }));

  function handleClick(index) {
    setLightBoxOpen(true);
    setIndex(index);
  }

  function handleNavigate(id){
    navigate(`/puneri-gallery/${id}`);
  }

  return (
    <div>
      <Banner
        textOnBanner="Gallery"
        background={background}
        playerImg={playerOnBanner}
        playerImgSize="100%"
        mobileBackground={mobileBackground}
      />
      <div className={classes.imageGallery}>
        <h1>{name || "MATCH 22 - PUNERI PALTAN VS TAMIL THALAIVAS"}</h1>
        <div>
          {match_images ? (
            match_images.map((image, index) => (
              <img
                key={index}
                onClick={() => handleClick(index)}
                src={image || playerOnBanner}
                alt="gallery"
              />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>

      <Lightbox
        className={classes.lightbox}
        open={lightBoxOpen}
        close={() => setLightBoxOpen(false)}
        index={index}
        slides={images}
        plugins={[Download, Fullscreen, Share, Zoom, Thumbnails]}
      />

      <div className={classes.previousAndNext}>
        <div
          onClick={() => handleNavigate(previousAndNext[0]?.id)}
          style={{
            backgroundImage: `url(${
              previousAndNext[0]?.main_image || background
            })`,
          }}
        >
          <h3>
            {previousAndNext[0]?.name ||
              "MATCH 22 - PUNERI PALTAN VS TAMIL THALAIVAS"}
          </h3>
        </div>
        <div
          onClick={() => handleNavigate(previousAndNext[1]?.id)}
          style={{
            backgroundImage: `url(${
              previousAndNext[1]?.main_image || background
            })`,
          }}
        >
          <h3>
            {previousAndNext[1]?.name ||
              "MATCH 22 - PUNERI PALTAN VS TAMIL THALAIVAS"}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SingleGallery;
