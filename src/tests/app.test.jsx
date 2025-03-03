import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("unit tests", () => {
  test("show React ⚛️ + Vite ⚡ + Replit 🌀", () => {
    render(<App />);
    const header = screen.getByRole("heading");
    expect(header).toBeDefined();
  });
});
