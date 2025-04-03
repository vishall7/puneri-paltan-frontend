import React from "react";
import classes from "./MediaGrid.module.css";
import { useNavigate } from "react-router-dom";

function GridCell({ data, type, cellSize = "", setVideoModal }) {  
  const navigate = useNavigate();

  function handleClick() {
    if (type === "video") {
      setVideoModal(data.url);
    } else {
      navigate(`/puneri-gallery/${data.id}`);
    }
  }

  return (
    <div className={classes.gridCell}>
      <div style={{ height: cellSize }} onClick={handleClick}>
        {type === "video" && (
          <>
            <img
              src={`https://img.youtube.com/vi/${data.url}/0.jpg`}
              alt="thumbnail"
            />
            <div className={classes.playbtn}></div>
          </>
        )}
        {type === "image" && (
          <img
            src={
              data.main_image ||
              "https://www.puneripaltan.com/uploads/image/Puneri%20Paltan-676a43684a4395.46979380gzj0nta8.jpg"
            }
            alt="match image"
          />
        )}
      </div>
      <div>
        <h3>
          {window.innerWidth < 1024
            ? data.name.replace(" Match Highlights", "")
            : data.name}
        </h3>
      </div>
    </div>
  );
}

function MediaGrid({ data, type, ...props }) {
  return (
    <div className={classes.mediaGrid}>
      {data.map((data) => (
        <GridCell key={data._id} data={data} type={type} {...props} />
      ))}
    </div>
  );
}

export default MediaGrid;
