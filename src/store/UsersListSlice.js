import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../constants";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
});

export const usersListSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "An error occurred while fetching users.";
      });
  },
});

export default usersListSlice.reducer;
