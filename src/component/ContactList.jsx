import React from "react";

function ContactList({ contacts }) {
  return (
    <div>
      <h3>Contact list</h3>
      {/**list rendering */}
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>{contact.name} {contact.lastName}</p>
              <p><span>📧</span> {contact.email}</p>
              <p><span>📞</span> {contact.phone}</p>
              <button>🗑️</button>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>No contact yet!</p>
      )}
    </div>
  );
}

export default ContactList;
