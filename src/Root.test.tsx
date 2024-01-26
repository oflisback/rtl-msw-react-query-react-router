import { screen } from "@testing-library/react";
import { renderWithRouter } from "./createTestRouter";
import { describe, it } from "vitest";

import Root from "./Root";

describe("Root", () => {
  it("renders headline", () => {
    renderWithRouter(<Root />);

    screen.debug();
  });
});
