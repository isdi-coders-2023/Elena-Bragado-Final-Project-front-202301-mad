import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given the header component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Header />);
  });
  describe("When it is render", () => {
    test("Then it should contain the image", () => {
      // eslint-disable-next-line no-restricted-globals
      const img = screen.getByAltText(/logo/i);
      expect(img).toBeInTheDocument();
    });
    test("Then it should contain role", () => {
      // eslint-disable-next-line no-restricted-globals
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });

    test("Then it should contain img role", () => {
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });
  });
});
