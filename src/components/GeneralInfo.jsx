import { useState } from "react";
import data from "../data/data.js";

export default function GeneralInfo() {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [editMode, setEditMode] = useState(false);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function saveEdit(e) {
    e.preventDefault();
    data.name = name;
    data.email = email;
    data.phone = phone;
    toggleEdit();
  }

  function cancelEdit() {
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
    toggleEdit();
  }

  if (!editMode) {
    return (
      <>
        <button onClick={toggleEdit}>Edit</button>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </>
    );
  } else {
    return (
      <>
        <form onSubmit={saveEdit}>
          <button type="Submit">Save</button>
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
          <p>Edit Mode</p>

          <input
            className="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </form>
      </>
    );
  }
}
