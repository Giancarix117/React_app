import * as React from "react";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
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
