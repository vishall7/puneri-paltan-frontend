import { createSlice } from "@reduxjs/toolkit";
import { fetchPlayers } from "./player.actions.js";

const initialState = {
    players: [],
    isLoading: true,
    error: null,
};

const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        resetSinglePlayer: (state) => {
            state.singlePlayer = null;    
       },
       resetErrorMessage: (state) => {
           state.error = null;
       } 
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPlayers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchPlayers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.players = action.payload;
        })
        .addCase(fetchPlayers.rejected, (state, action) => {
            state.isLoading = false;
            state.players = [];
            state.error = action.error.message;
        })
    }
})

export const {resetSinglePlayer, resetErrorMessage} = playersSlice.actions;

export default playersSlice.reducer;