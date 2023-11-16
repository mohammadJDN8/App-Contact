import { useState } from "react";
import ContactList from "./ContactList";
function Contact() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
    console.log(name, value);
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please inter valid data!");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={contact.name}
        onChange={changeHandler}
        name="name"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={contact.lastName}
        onChange={changeHandler}
        name="lastName"
      />
      <input
        type="text"
        placeholder="Email"
        value={contact.email}
        onChange={changeHandler}
        name="email"
      />
      <input
        type="number"
        placeholder="Phone"
        value={contact.phone}
        onChange={changeHandler}
        name="phone"
      />
      <button onClick={addHandler}>Add contact</button>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Contact;
