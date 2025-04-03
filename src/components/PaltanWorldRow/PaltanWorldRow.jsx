import React from "react";
import classes from "./PaltanWorldRow.module.css";
import { useNavigate } from "react-router-dom";

function PaltanWorldRow() {
  const navigate = useNavigate();  

  return (
    <div className={classes.paltanWorldRow}>
      <div onClick={() => navigate("/puneri-tv")}>
        <h3>Puneri tv</h3>
      </div>
      <div onClick={() => navigate("/wallpapers")}>
        <h3>Wallpapers</h3>
      </div>
      <div onClick={() => navigate("/blogs")}>
        <h3>blogs</h3>
      </div>
    </div>
  );
}

export default PaltanWorldRow;
