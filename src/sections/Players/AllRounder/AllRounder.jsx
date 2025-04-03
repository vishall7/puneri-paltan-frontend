import React from "react";
import PlayerType from "../../../components/PlayerType/PlayerType";
import PlayerGrid from "../../../components/PlayerGrid/PlayerGrid";
import classes from "./AllRounder.module.css";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { playersData } from "../../../utils/dummyData";

function AllRounder() {
  const allRounderSelector = createSelector(
    [(state) => state.players.players],
    (players) => players.filter((player) => player.category === "All Rounder")
  );
  const allRounders = useSelector(allRounderSelector);

  return (
    <section className={classes.allRounder}>
      <PlayerType type="All Rounders" />
      <PlayerGrid players={(allRounders.length && allRounders) || playersData} />
    </section>
  );
}

export default AllRounder;
