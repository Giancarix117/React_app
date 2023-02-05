import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("number gets increased with click", async () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("counter-starting-value")).toHaveTextContent("0");
  expect(getByTestId("counter-result")).toHaveTextContent("0");
  userEvent.click(getByTestId("counter-button"));
  expect(getByTestId("counter-starting-value")).toHaveTextContent("0");
  expect(getByTestId("counter-result")).toHaveTextContent("1");
});

it("should handle initial value correctly", async () => {
  const { getByTestId } = render(<App value={2} />);
  expect(getByTestId("counter-starting-value")).toHaveTextContent("2");
  expect(getByTestId("counter-result")).toHaveTextContent("0");
  userEvent.click(getByTestId("counter-button"));
  expect(getByTestId("counter-starting-value")).toHaveTextContent("2");
  expect(getByTestId("counter-result")).toHaveTextContent("1");
});
