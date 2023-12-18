import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../constants";

export const loginUser = createAsyncThunk(
  "users/login",
  async (userCredentials) => {
    const request = await axios.post(
      `${API_BASE_URL}/api/login`,
      userCredentials
    );
    console.log("request test", request);
    const response = await request.data.token;

    localStorage.setItem("token", response);
    // const response = await request.data.token;

    // localStorage.setItem("token", JSON.stringify(response));

    return response;
  }
);
export const registerUser = createAsyncThunk(
  "users/register",
  async (userCredentials) => {
    const request = await axios.post(
      `${API_BASE_URL}/api/register`,
      userCredentials
    );

    const response = await request.data.token;
    localStorage.setItem("token", response);

    return response;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error =
        action.error && action.error.message
          ? action.error.message
          : "An error occurred during login.";
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error =
        action.error && action.error.message
          ? action.error.message
          : "An error occurred during registration.";
    });
  },
});

export default userSlice.reducer;
