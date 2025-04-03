import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { axiosHttp } from "../../utils/axios.js";

export const fetchPlayers = createAsyncThunk("fetchPlayers", async () => {
    try{
        const response = await axiosHttp.get("/players/all-players");
        return response;
    }catch(error) {
        throw new Error("unable to fetch data", error.message);
    }
}); 

