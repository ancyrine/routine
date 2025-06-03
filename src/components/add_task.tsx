import React, { useState } from "react";

type TaskInput = {
  title: string;
  start: string;
  end: string;
  color: string;
};

const defaultColor = "#c7d2fe";

const AddTask: React.FC<{ onAdd: (task: TaskInput) => void }> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("10:00");
  const [color, setColor] = useState(defaultColor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, start, end, color });
    setTitle("");
    setStart("09:00");
    setEnd("10:00");
    setColor(defaultColor);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px #0001",
        padding: 16,
        margin: "16px auto",
        minWidth: 220,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <h3 style={{ fontSize: 16, fontWeight: "bold" }}>Add Task</h3>
      <input
        type="text"
        placeholder="Task name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #eee" }}
        required
      />
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="time"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          style={{
            flex: 1,
            padding: 6,
            borderRadius: 6,
            border: "1px solid #eee",
          }}
          required
        />
        <input
          type="time"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          style={{
            flex: 1,
            padding: 6,
            borderRadius: 6,
            border: "1px solid #eee",
          }}
          required
        />
      </div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: 40, height: 32, border: "none", background: "none" }}
      />
      <button
        type="submit"
        style={{
          background: "#6366f1",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "8px 0",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
