import React from "react";
import classes from "./PaltanNews.module.css";
import Button from "../../../components/Button/Button";
import NewsLetter from "./NewsLetter/NewsLetter";

function PaltanNews() {
  return (
    <div className={classes.paltanNews}>
      <div className={classes.banner}>
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="fadeDown20"
        >
          Puneri Paltan
        </h1>
        <h1 data-aos="fade-up" data-aos-duration="1000">
          in the News
        </h1>
        <Button />
      </div>
      <NewsLetter />
    </div>
  );
}

export default PaltanNews;
  