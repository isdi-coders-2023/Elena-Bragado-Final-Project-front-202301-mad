/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import { AppRouter } from "./app.router";

describe("Given the App router component", () => {
  const paths = (number: number) => {
    render(
      <Provider store={store}>
        <Router
          initialEntries={["/", "/login", "/register"]}
          initialIndex={number}
        >
          <AppRouter></AppRouter>
        </Router>
      </Provider>
    );
  };

  describe('When it is rendering and the path is "/"', () => {
    test("Then it should in the docdument", async () => {
      await waitFor(async () => paths(0));
      const element = await screen.findAllByRole("textbox");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/login"', () => {
    test('Then the "name" input should be in the document', async () => {
      await waitFor(async () => paths(1));
      const element = await screen.findAllByRole("textbox");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/register"', () => {
    test('Then the "email" input should be in the document', async () => {
      await waitFor(async () => paths(2));
      const element = await screen.findAllByRole("textbox");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
