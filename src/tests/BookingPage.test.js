import { render, screen } from "@testing-library/react";
import { updateTimes, initializeTimes } from "../pages/BookingPage";

test("Verify reducer functionality", () => {
  const expectedState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const initialState = initializeTimes();

  expect(initialState).toEqual(expectedState);
  expect(updateTimes(initialState, { type: "updateDate " })).toEqual(
    expectedState
  );
});
