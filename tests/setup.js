import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import { mockServer } from "../tests/mockServer";

expect.extend(matchers);

beforeAll(() => mockServer.listen());
afterAll(() => mockServer.close());
afterEach(() => {
  mockServer.resetHandlers();
  cleanup();
});
