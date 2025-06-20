import { BookingForm } from "../components/BookingForm.js";
import { useReducer } from "react";
import { data, useNavigate } from "react-router-dom";
import { updateTimes, initializeTimes } from "../utils/BookingReducer.js";

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
