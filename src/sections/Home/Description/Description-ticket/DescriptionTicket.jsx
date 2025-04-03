import React from "react";
import playerImage from "../../../../assets/Images/home/ticket-player.png";
import ticketImage from "../../../../assets/Images/home/tickets.png";
import classes from "./DescriptionTicket.module.css";
import Button from "../../../../components/Button/Button";
import { Link } from "react-router-dom";

function DescriptionTicket() {
  return (
    <div className={classes.ticketDiv}>
      <div className={classes.left}>
        <img src={playerImage} alt="player image" />
      </div>
      <div className={classes.right}>
        <img src={ticketImage} alt="" />
      </div>
      <div className={classes.ticketBtn}>
        <Link target="blank" to="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457">
          <Button
            text="buy tickets"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            className="fadeRight10"
          />
        </Link>
      </div>
    </div>
  );
}

export default DescriptionTicket;
