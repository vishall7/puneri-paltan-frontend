import React from "react";
import classes from "./PlayerGrid.module.css";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PlayerGrid({ players = [] }) {
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const num = 15;
    const rotateX = Math.max(Math.min(y / num, 15), -15);
    const rotateY = Math.max(Math.min(-x / num, 15), -15);

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  function handleClick(name){
    const slug = name.split(' ').join('-').toLowerCase();
    navigate(`/player/${slug}`);
  } 

  const nameDividder = (name) => {
    return name.split(' ');
  }

  return (
    <Container>
      <div className={classes.playerGrid}>
        {players.map((player, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay={index * 150}
            data-aos-offset="0"
            data-aos-anchor-placement="top-bottom"
            onClick={() => handleClick(player.name)}
          >
            <div              
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={player.profile_image} alt={player.name} />
              <h3>{nameDividder(player.name)[0].slice(0, 10)}</h3>
              <h4>{nameDividder(player.name)[1]}</h4>
              <p>{player.category}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default PlayerGrid;
