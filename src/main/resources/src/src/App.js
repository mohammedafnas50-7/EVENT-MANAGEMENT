import React from "react";
import EventList from "./components/EventList";
import CreateEvent from "./components/CreateEvent";

export default function App() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <CreateEvent />
      <EventList />
    </div>
  );
}
