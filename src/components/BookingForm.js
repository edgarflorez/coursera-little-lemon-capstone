import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function BookingForm({ availableTimes, onChangeDate, submitForm }) {
  const [availableOcassions, setAvailableOcassions] = useState([
    "Birthday",
    "Anniversary",
  ]);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "0",
      occasion: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      submitForm(values);
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .moreThan(0)
        .lessThan(10)
        .required("Number of guests is required"),
      occasion: Yup.string(),
    }),
  });

  return (
    <section className="booking-form">
      <div className="grid">
        <div className="page-content">
          <h1>Book Now</h1>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "grid", maxWidth: 200, gap: 20 }}
          >
            <div
              className={
                "form-control " +
                (formik.touched.date && formik.errors.date
                  ? "form-control--error"
                  : "")
              }
            >
              <label htmlFor="date">Choose date</label>
              <input
                id="date"
                max="2025-06-28"
                min="2025-06-21"
                name="date"
                type="date"
                {...formik.getFieldProps("date")}
                onChange={(e) => {
                  formik.handleChange(e);
                  onChangeDate(e);
                }}
              />
              <p className="form-control__error">{formik.errors.date}</p>
            </div>
            <div
              className={
                "form-control " +
                (formik.touched.time && formik.errors.time
                  ? "form-control--error"
                  : "")
              }
            >
              <label htmlFor="time">Choose time</label>
              <select name="time" id="time" {...formik.getFieldProps("time")}>
                <option value="">Available dates</option>
                {availableTimes.map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
              <p className="form-control__error">{formik.errors.time}</p>
            </div>
            <div
              className={
                "form-control " +
                (formik.touched.guests && formik.errors.guests
                  ? "form-control--error"
                  : "")
              }
            >
              <label htmlFor="guests">Number of guests</label>
              <input
                id="guests"
                max="10"
                min="1"
                name="guests"
                placeholder="1"
                type="number"
                {...formik.getFieldProps("guests")}
              />
              <p className="form-control__error">{formik.errors.guests}</p>
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                {...formik.getFieldProps("occasion")}
              >
                <option value="">Select any</option>
                {availableOcassions.map((ocassion) => (
                  <option key={ocassion}>{ocassion}</option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Make Your reservation"
              disabled={!(formik.isValid && formik.dirty)}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
