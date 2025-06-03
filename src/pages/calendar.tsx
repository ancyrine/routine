import React, { useState } from "react";
import Calendar from "../components/calendar";
import Daily from "../components/daily_view";
import AddTask from "../components/add_task";
import Projects from "../components/projects";

type Event = {
  title: string;
  start: string;
  end: string;
  color: string;
};

const initialEvents: Event[] = [
  {
    title: "🌅 Morning Routine",
    start: "07:00",
    end: "08:30",
    color: "#f5e6c8",
  },
  {
    title: "💻 Work",
    start: "09:00",
    end: "16:00",
    color: "#dbeafe",
  },
];

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const handleAddTask = (task: Event) => {
    setEvents([...events, task]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        background: "#f6f6f6",
        minHeight: "100vh",
        padding: 16,
      }}
    >
      <Calendar />
      <Daily events={events} />
      <AddTask onAdd={handleAddTask} />
      <Projects />
    </div>
  );
};

export default CalendarPage;
