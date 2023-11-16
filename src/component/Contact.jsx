import { useState } from "react";
import ContactList from "./ContactList";

const inputs = [
  { type: "text", name: "name", placeholder: "Name" },
  { type: "text", name: "lastName", placeholder: "LastName" },
  { type: "email", name: "email", placeholder: "Email" },
  { type: "number", name: "phone", placeholder: "Phone" },
];

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
      <div>
        {inputs.map((input,index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Contact;
