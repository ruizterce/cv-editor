import { useState } from "react";
import data from "../data/data.js";
import EditBtn from "./EditBtn.jsx";
import "../styles/GeneralInfo.css";

export default function GeneralInfo() {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [address, setAddress] = useState(data.address);
  const [editMode, setEditMode] = useState(false);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function saveEdit(e) {
    e.preventDefault();
    data.name = name;
    data.email = email;
    data.phone = phone;
    data.address = address;
    toggleEdit();
  }

  function cancelEdit() {
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
    setAddress(data.address);
    toggleEdit();
  }

  if (!editMode) {
    return (
      <section className="general-info">
        <EditBtn editFunction={toggleEdit} />
        <h1>{name}</h1>
        <span>{email}</span>
        <span>{phone}</span>
        <span>{address}</span>
      </section>
    );
  } else {
    return (
      <section className="general-info edit-mode">
        <form onSubmit={saveEdit}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              className="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>

            <label htmlFor="address">Location</label>
            <input
              id="address"
              className="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>

          <button type="Submit">Save</button>
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        </form>
      </section>
    );
  }
}
