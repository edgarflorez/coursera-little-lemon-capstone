import { render, screen } from "@testing-library/react";
import { BookingForm } from "../components/BookingForm";

test("Renders the Booking form heading", () => {
  const mockInitializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  render(<BookingForm availableTimes={mockInitializeTimes} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
