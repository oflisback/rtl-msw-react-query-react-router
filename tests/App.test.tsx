import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import "@testing-library/jest-dom";
import { mockServer } from "./mockServer";
import { renderWithWrapper } from "./createCustomRender";
import { describe, expect, it } from "vitest";

import App from "../src/App";

describe("App tests", () => {
  it("Renders app with mocked API response", async () => {
    mockServer.use(
      http.get("https://pokeapi.co/api/v2/pokemon/pikachu", () => {
        return HttpResponse.json({ name: "mock-pikachu" });
      }),
    );
    renderWithWrapper(<App />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("mock-pikachu")).toBeInTheDocument();
    });
  });

  it("Renders app with real API response", async () => {
    renderWithWrapper(<App />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
    await waitFor(
      () => {
        expect(screen.getByText("pikachu")).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  });
});
