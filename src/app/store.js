import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Players/player.slice.js";
import galleryReducer from "./Gallery/gallery.slice.js";
import tvReducer from "./Tv/tv.slice.js";

const store = configureStore({
    reducer: {
        players: reducer,
        gallery: galleryReducer,
        tv: tvReducer
    },
});

export default store;