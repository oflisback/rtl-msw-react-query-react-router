import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import Root from "./Root";

describe("Root", () => {
  it("renders headline", () => {
    render(<Root />);

    screen.debug();
  });
});
