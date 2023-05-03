import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../../models/user";

export type UserStateStructure = {
  userLogged: UserStructure;
  users: UserStructure[];
  token: string;
};

const initialState: UserStateStructure = {
  userLogged: {} as UserStructure,
  users: [],
  token: "no-token",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<UserStructure>) {
      state.users = [...state.users, action.payload];
    },

    loginToken(state: UserStateStructure, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    login(state: UserStateStructure, action: PayloadAction<UserStructure>) {
      state.userLogged = action.payload;
    },
  },
});

export const { loginToken, login } = userSlice.actions;

export const userReducer = userSlice.reducer;
