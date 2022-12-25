import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("should toggle confirm order button when t&c is checked or unchecked", async () => {
  const user = userEvent.setup();
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
  await user.click(checkboxElement);
  expect(confirmOrderButton).toBeEnabled();

  // unchecking terms and conditions should disable confirm order button
  // checkbox selected should enable the button
  await user.click(checkboxElement);
  expect(confirmOrderButton).toBeDisabled();
});

test("should display popover message when hovered", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  //popover should start hidden
  const noPopoverElement = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(noPopoverElement).not.toBeInTheDocument();

  // popover should display on hover
  const checkboxElement = screen.getByText(/terms and conditions/i);
  await user.hover(checkboxElement);
  const popoverElement = screen.getByText(
    /no ice cream will actually be delivered/i
  );
  expect(popoverElement).toBeInTheDocument();

  // popover should be hidden on unhover
  await user.unhover(checkboxElement);
  expect(noPopoverElement).not.toBeInTheDocument();
});
