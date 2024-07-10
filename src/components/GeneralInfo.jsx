import { useState } from "react";
import data from "../data/data.js";
import EditBtn from "./EditBtn.jsx";
import "../styles/GeneralInfo.css";

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
      <section className="general-info">
        <EditBtn editFunction={toggleEdit} />
        <h1>{name}</h1>
        <span>{email}</span>
        <span>{phone}</span>
      </section>
    );
  } else {
    return (
      <section className="general-info edit-mode">
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
      </section>
    );
  }
}
