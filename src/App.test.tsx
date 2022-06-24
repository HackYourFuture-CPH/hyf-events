import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders HYF title", () => {
  render(<App />);
  const title = screen.getByText(/HYF/i);
  expect(title).toBeInTheDocument();
});
