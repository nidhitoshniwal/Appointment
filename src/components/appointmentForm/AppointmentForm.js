import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const changeContact = (e) => {
    setContact(e.target.value);
  } 

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" value={title} placeholder="Enter Title of Appointment" onChange={event => setTitle(event.target.value)} required />
      <label>Date</label>
      <input type="date" value={date} placeholder="Select Date" onChange={event => setDate(event.target.value)} min={getTodayString()} required />
      <label>Time</label>
      <input type="time" value={time} placeholder="Enter Time of Appointment" onChange={event => setTime(event.target.value)} required />
      <label>Contact</label>
      <ContactPicker contacts={contacts} handleChange={changeContact} />
      <input type="Submit" value="Submit" />
    </form>
  );
};
