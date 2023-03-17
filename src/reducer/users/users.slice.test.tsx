import { PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../../models/user";
import { userReducer, State } from "./users.slice";

const secretWord = "password";
const mockUser = {
  id: "id",
  email: "email",
  password: secretWord,
};

const mockInitialState: State = {
  userLogged: {} as UserStructure,
  users: [],
};
describe("Given user slice", () => {
  describe("When we use the register method", () => {
    test("Then it should return the payload", () => {
      const mockRegister: PayloadAction<UserStructure> = {
        type: "user/register",
        payload: mockUser,
      };
      const result = userReducer(mockInitialState, mockRegister);
      expect(result).toEqual({
        userLogged: {} as UserStructure,
        users: [mockUser],
      });
    });
  });
  describe("When we use the login method", () => {
    test("Then it should return a payload", () => {
      const mockLogin: PayloadAction<UserStructure> = {
        type: "user/login",
        payload: mockUser,
      };
      const result = userReducer(mockInitialState, mockLogin);
      expect(result.userLogged).toBe(mockUser);
    });
  });
});
