import React, { useEffect, useRef } from "react";
import classes from "./VideoModal.module.css";

function VideoModal({ videoModal, setVideoModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (videoModal) {
      modalRef.current.focus();
    }

    const handleOutsideClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setVideoModal(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [videoModal, setVideoModal]);

  return (
    <div className={classes.videoModal}>
      <div ref={modalRef}>
        <button onClick={() => setVideoModal(null)}>&times;</button>
        <iframe
          src={`https://www.youtube.com/embed/${videoModal}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoModal;
