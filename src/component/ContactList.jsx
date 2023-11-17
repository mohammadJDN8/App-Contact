import React from "react";
import ContactItem from "./ContactItem";
function ContactList({ contacts }) {
  return (
    <div>
      <h3>Contact list</h3>
      {/**conditional rendering */}
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} />
          ))}
        </ul>
      ) : (
        <p>No contact yet!</p>
      )}
    </div>
  );
}

export default ContactList;
