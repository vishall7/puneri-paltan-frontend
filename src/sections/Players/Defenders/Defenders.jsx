import React from "react";
import PlayerType from "../../../components/PlayerType/PlayerType";
import PlayerGrid from "../../../components/PlayerGrid/PlayerGrid";
import classes from "./Defenders.module.css";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { playersData } from "../../../utils/dummyData";

function Defenders() {
  const defenderSelector = createSelector(
    [(state) => state.players.players],
    (players) => players.filter((player) => player.category === "Defender")
  );
  const defenders = useSelector(defenderSelector);

  return (
    <section className={classes.defenders}>
      <PlayerType type="Defenders" />
      <PlayerGrid players={(defenders.length && defenders) || playersData} />
    </section>
  );
}

export default Defenders;
