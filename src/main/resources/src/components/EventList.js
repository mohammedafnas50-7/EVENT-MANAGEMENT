import React, { useEffect, useState } from "react";

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="mb-2 p-2 border rounded">
            <strong>{event.name}</strong> - {event.location} ({event.date})
          </li>
        ))}
      </ul>
    </div>
  );
}
