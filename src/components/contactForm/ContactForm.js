import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input type='text' id='name' value={name} placeholder="Enter Name" onChange={event => setName(event.target.value)} required />
    <label>Phone</label>
    <input type='text' id='phone' value={phone} placeholder="10 digit valid phone number" pattern="[1-9]{1}[0-9]{9}" onChange={event => setPhone(event.target.value)} required />
    <label>Email</label>
    <input type='text' id='email' value={email} placeholder="Enter a valid email address" onChange={event => setEmail(event.target.value)} required />
    <input type='submit' value='Submit' />
  </form>
  );
};
