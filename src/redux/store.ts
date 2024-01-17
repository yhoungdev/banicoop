import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import countReder from "./slice/totalCountSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  getTotalItems: countReder,
});

const store = configureStore({
  reducer: rootReducer,
});
export { store };
