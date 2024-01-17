import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
    authToken: "",
  },
  reducers: {
    handleJWT: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const { handleJWT } = authSlice.actions;
export default authSlice.reducer;
