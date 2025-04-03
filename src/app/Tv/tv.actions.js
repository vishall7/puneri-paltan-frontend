import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosHttp} from "../../utils/axios";

export const fetchTv = createAsyncThunk("fetchTv", async () => {
    try {
        const response = await axiosHttp.get("/puneri-tv");
        return response.data;
    } catch (error) {
        throw new Error("unable to fetch data", error.message);
    }
});