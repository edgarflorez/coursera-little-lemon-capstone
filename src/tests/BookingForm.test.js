import { fireEvent, render, screen } from "@testing-library/react";
import { BookingForm } from "../components/BookingForm";
import { mockTimes } from "./mocks/times";

test("Renders the Booking form heading and fields", () => {
  render(<BookingForm availableTimes={mockTimes} />);
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();

  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeInTheDocument();

  const timeInput = screen.getByLabelText("Choose time");
  expect(timeInput).toBeInTheDocument();

  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toBeInTheDocument();

  const OccasionInput = screen.getByLabelText("Occasion");
  expect(OccasionInput).toBeInTheDocument();

  const submitButton = screen.getByRole("button", {
    value: "Make Your reservation",
  });
  expect(submitButton).toBeInTheDocument();
});

test("validate form fielsds", () => {
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={mockTimes} />);

  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: "0" } });

  const submitButton = screen.getByRole("button", {
    value: "Make Your reservation",
  });
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");

  // Test the form is submitted with valid data
  // const dateInput = screen.getByLabelText("Choose date");
  // const timeInput = screen.getByLabelText("Choose time");
  // const OccasionInput = screen.getByLabelText("Occasion");

  // fireEvent.change(dateInput, { target: { value: "2025-06-23" } });
  // fireEvent.change(timeInput, { target: { value: "17:30" } });
  // fireEvent.change(OccasionInput, { target: { value: "Birthday" } });
  // fireEvent.change(guestsInput, { target: { value: "2" } });
  // fireEvent.click(submitButton);

  // expect(handleSubmit).toHaveBeenCalled();
  // expect(submitButton).not.toHaveAttribute("disabled");
});
