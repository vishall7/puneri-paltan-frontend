import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosTryCatch } from "../../utils/axios";

export const fetchGalleryImages = createAsyncThunk("fetchGalleryImages", async () => {
    try{
        const response = await axiosTryCatch.get("/gallary_list?cat_id=7");  
        return response;
    }catch(error) {
        throw new Error("something went wrong while fetching data: ", error.message);
    }
})