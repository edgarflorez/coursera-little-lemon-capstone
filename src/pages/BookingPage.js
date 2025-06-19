import { BookingForm } from "../components/BookingForm.js";
import { useReducer } from "react";
import { data, useNavigate } from "react-router-dom";

export function updateTimes(availableTimes, action) {
  switch (action.type) {
    case "updateDate":
      const date = new Date(action.date);
      return window.fetchAPI(date);
    default:
      return availableTimes;
  }
}

export function initializeTimes() {
  return window.fetchAPI(new Date());
}

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );
  const navigate = useNavigate();

  function submitForm(formData) {
    if (window.submitAPI(data)) {
      console.log("Form submitted successfully", formData);
      navigate("/booking-confirmation");
    }
  }

  function onChangeDate(e) {
    console.log(">>>>", e.target.value);
    dispatch({ type: "updateDate", date: e.target.value });
  }

  return (
    <BookingForm
      availableTimes={availableTimes}
      onChangeDate={onChangeDate}
      submitForm={submitForm}
    />
  );
}
