import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

import { api } from "../../api/api";
const store = configureStore({
  reducer: {
    user: userReducer,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
