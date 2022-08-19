import React, { useContext, useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if(props.appointments && props.appointments.filter(app => {
        return app.date === date && app.time === time
      }).length > 0) {
      alert('Appointment for the time already exists')
      return;
    }
    props.addAppointment(title, contact, date, time);
    setTitle('');
    setContact({name:'', phone:'', email:''});
    setDate('');
    setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit}
        title={title} setTitle={setTitle}
        contact={contact} setContact={setContact}
        date={date} setDate={setDate}
        time={time} setTime={setTime}
        contacts={props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={props.appointments} />
      </section>
    </div>
  );
};
