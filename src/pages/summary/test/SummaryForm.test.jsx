import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("should toggle confirm order button when t&c is checked or unchecked", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  // by default checkbox should be unchecked
  expect(checkboxElement).not.toBeChecked();
  expect(confirmOrderButton).toBeDisabled();

  // checking terms and conditions checkbox should enable confirm order button
  fireEvent.click(checkboxElement);
  expect(confirmOrderButton).toBeEnabled();

  // unchecking terms and conditions should disable confirm order button
  // checkbox selected should enable the button
  fireEvent.click(checkboxElement);
  expect(confirmOrderButton).toBeDisabled();
});
