import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { DummyData } from "../../api/data";

const inputPlaceholderText = "SEARCH (Client Name / Policy Number)";

describe("Search component", () => {
  test("It should show placeholder", () => {
    render(<Search data={DummyData} />);
    const input = screen.getByPlaceholderText(inputPlaceholderText);
    expect(input).toBeDefined();
  });
  test("It should typing", () => {
    render(<Search data={DummyData} />);
    const input = screen.getByPlaceholderText(inputPlaceholderText);
    fireEvent.change(input, { target: { value: "Ab" } });
    expect(input.value).toBe("Ab");
  });
  test("It should show the results", () => {
    const { container } = render(<Search data={DummyData} />);
    const input = screen.getByPlaceholderText(inputPlaceholderText);
    fireEvent.change(input, { target: { value: "Ab" } });
    const result = container.querySelector("ul");
    expect(result).toBeTruthy();
  });
});
