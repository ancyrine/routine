import React from "react";
import Calendar from "../components/calendar";
import Daily from "../components/daily_view";

const CalendarPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 32,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 32,
        background: "#f6f6f6",
        minHeight: "100vh",
      }}
    >
      <Calendar />
      <Daily />
    </div>
  );
};

export default CalendarPage;
