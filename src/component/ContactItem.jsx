import React from "react";

function ContactItem({ data: { id, name, lastName, phone, email } }) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      <button>🗑️</button>
    </li>
  );
}

export default ContactItem;
