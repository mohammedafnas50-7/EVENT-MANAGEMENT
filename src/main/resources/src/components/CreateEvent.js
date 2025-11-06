import React, { useState } from "react";

export default function CreateEvent() {
  const [event, setEvent] = useState({ name: "", location: "", date: "" });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then(() => {
        alert("Event Created!");
        setEvent({ name: "", location: "", date: "" });
      });
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input
        name="name"
        value={event.name}
        placeholder="Event Name"
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        name="location"
        value={event.location}
        placeholder="Location"
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        name="date"
        value={event.date}
        placeholder="Date"
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Event
      </button>
    </form>
  );
}
