import { render } from "@testing-library/react";
import { AppRouter } from "../app.router/app.router";
import App from "./app";

jest.mock("../app.router/app.router.tsx");

describe("Given App component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

  test("Then appRouter should be called", () => {
    expect(AppRouter).toHaveBeenCalled();
  });
});
