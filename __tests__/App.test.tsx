import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Index from "../pages/index";

describe("index", () => {
  it("should renders learn react link", () => {
    render(<Index />);
    const linkElement = screen.getByText(/글/i);

    expect(linkElement).toBeInTheDocument();
  });
});
