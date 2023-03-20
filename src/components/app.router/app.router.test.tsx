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

  describe("When rendering and the path is '/'", () => {
    test("Then it should be got to / and render it", async () => {
      await waitFor(async () => paths(0));
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When rendering and the path is '/login'", () => {
    test("Then it should be got to /login and render it", async () => {
      await waitFor(async () => paths(0));
      const element = await screen.findAllByText("/login");
      expect(element).toBeInTheDocument();
    });
  });
});
