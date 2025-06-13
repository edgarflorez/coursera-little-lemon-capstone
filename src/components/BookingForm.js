import { useState } from "react";

export function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [ocassion, setOcassion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [availableOcassions, setAvailableOcassions] = useState([
    "Birthday",
    "Anniversary",
  ]);

  return (
    <section className="booking-form">
      <div className="grid">
        <div className="page-content">
          <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time "
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {availableTimes.map((time) => (
                <option>{time}</option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={ocassion}
              onChange={(e) => setOcassion(e.target.value)}
            >
              {availableOcassions.map((ocassion) => (
                <option>{ocassion}</option>
              ))}
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
        </div>
      </div>
    </section>
  );
}
