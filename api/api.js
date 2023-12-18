// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    getUsersList: builder.query({
      query: (page = 1) => `users?page=${page}`,
    }),
  }),
});

export const { useGetUsersListQuery } = api;

export default api;
