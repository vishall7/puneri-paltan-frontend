import React from "react";
import classes from "./PaltanBanner.module.css";
import paltanBannerImage from "../../../assets/Images/home/paltan-world-homepage.png";
import paltanBannerImageMobile from "../../../assets/MobileView-Images/paltan-world-banner-mobile.png";
import leftDust from "../../../assets/Images/home/left-dust.png";
import middleDust from "../../../assets/Images/home/middle-dust.png";
import rightDust from "../../../assets/Images/home/right-dust.png";
import Button from "../../../components/Button/Button";

function PaltanBanner() {
  return (
    <div className={classes.paltan}>
      <div className={classes.paltanBanner}>
        <img
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="0"
          data-aos-delay="1000"
          data-aos-once="true"
          className={`fadeDown20 ${classes.paltanBannerImageFull}`}
          src={paltanBannerImage}
          alt="paltan banner"
        />

        {/* mobile size image */}

        <img          
          className={`fadeDown20 ${classes.paltanBannerImageMobile}`}
          src={paltanBannerImageMobile}
          alt="paltan banner"
        />
        <div>
          <img
            data-aos="zoom-in"
            data-aos-once="true"
            src={leftDust}
            className={classes.leftDust}
            alt="left-dust"
          />
          <img
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-offset="0"
            src={middleDust}
            className={classes.middleDust}
            alt="middle-dust"
          />
          <img src={rightDust} className={classes.rightDust} alt="right-dust" />
        </div>
        <div className={classes.paltanText}>
          <h1
            data-aos="fade-down"
            data-aos-duration="1300"
            data-aos-offset="-250"
            className="fadeDown20"
            data-aos-anchor-placement="top-bottom"
          >
            Paltan
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="-250"
          >
            World
          </h1>
          <Button navigateTo={"/puneri-world"}/>
        </div>
      </div>
    </div>
  );
}

export default PaltanBanner;
