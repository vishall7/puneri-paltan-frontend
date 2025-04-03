import {createSlice} from "@reduxjs/toolkit";
import {fetchGalleryImages} from "./gallery.actions.js"

const initialState = {
    galleryImages: [],
    isLoading: false,
    error: null,
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        resetSingleGallery: (state) => {
            state.singleGallery = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGalleryImages.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchGalleryImages.fulfilled, (state, action) => {
            state.isLoading = false;
            state.galleryImages = action.payload;
        })
        .addCase(fetchGalleryImages.rejected, (state, action) => {
            state.isLoading = false;
            state.galleryImages = [];
            state.error = action.error.message;
        })
    },
});

export const { resetSingleGallery } = gallerySlice.actions;

export default gallerySlice.reducer;