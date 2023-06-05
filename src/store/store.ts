import { configureStore } from "@reduxjs/toolkit";
import { professionalReducer } from "../reducer/professionals/professionals.slice";
import { userReducer } from "../reducer/users/users.slice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    professionalState: professionalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
