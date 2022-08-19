import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.handleChange} required>
      <option>None</option>
      {
      props.contacts.map((contact) => 
        <option>{contact.name}</option>
      )
    }
    </select>
  );
};
