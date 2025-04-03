import React from "react";
import classes from "./Raiders.module.css";
import PlayerType from "../../../components/PlayerType/PlayerType";
import PlayerGrid from "../../../components/PlayerGrid/PlayerGrid";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import {playersData} from "../../../utils/dummyData";

function Raiders() {
  const raiderSelector = createSelector(
    [(state) => state.players.players],
    (players) => players.filter((player) => player.category === "Raider")
  );
  const raiders = useSelector(raiderSelector);

  return (
    <div className={classes.raiders}>
      <PlayerType type="Raiders" />
      <PlayerGrid players={(raiders.length && raiders) || playersData} />
    </div>
  );
}

export default Raiders;
