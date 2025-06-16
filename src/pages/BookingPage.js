import { BookingForm } from "../components/BookingForm.js";
import { useState } from "react";
import { useReducer } from "react";

function updateTimes(availableTimes, action) {
  switch (action.type) {
    case "updateDate":
      return availableTimes;
    default:
      return availableTimes;
  }
}

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export default function BookingPage() {
  // const [availableTimes, setAvailableTimes] = useState([]);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  function onChangeDate(e) {
    console.log(">>>>", e.target.value);
    dispatch({ type: "updateDate", date: e.target.value });
  }

  return (
    <BookingForm availableTimes={availableTimes} onChangeDate={onChangeDate} />
  );
}
