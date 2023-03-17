/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { UserStructure } from "../models/user";
import { UsersRepo } from "../services/users/users.repo";
import { store } from "../store/store";
import { useUsers } from "./useUsers";

describe("Given the useWorkers hook", () => {
  let mockPayload: UserStructure;
  let mockRepo: UsersRepo;

  beforeEach(async () => {
    mockPayload = {
      username: "sample",
      email: "sample@sample.com",
    } as unknown as UserStructure;

    mockRepo = {
      create: jest.fn(),
    } as unknown as UsersRepo;

    const TestComponent = function () {
      const { userRegister, userLogin } = useUsers(mockRepo);

      return (
        <>
          <button onClick={() => userRegister(mockPayload)}>register</button>
          <button onClick={() => userLogin(mockPayload)}>login</button>
        </>
      );
    };
    await act(async () =>
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      )
    );
  });

  describe("When it's rendered", () => {
    test("Then it has to have a button", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });
  });

  describe("When you click the register button", () => {
    test("Then userRegister function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[0]));
      expect(mockRepo.create).toHaveBeenCalled();
    });
  });

  describe("When you click the login button", () => {
    test("Then userLogin function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[1]));
      expect(mockRepo.create).toHaveBeenCalled();
    });
  });
});
