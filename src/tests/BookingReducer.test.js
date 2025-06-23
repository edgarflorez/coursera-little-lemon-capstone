import { updateTimes, initializeTimes } from "../utils/BookingReducer";
import { mockTimes } from "./mocks/times";

test("Verify reducer functionality", () => {
  window.fetchAPI = jest.fn().mockReturnValue(mockTimes);

  const expectedState = mockTimes;
  const initialState = initializeTimes();

  expect(initialState).toEqual(expectedState);
  expect(updateTimes(initialState, { type: "updateDate" })).toEqual(
    expectedState
  );
});
