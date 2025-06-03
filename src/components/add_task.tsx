import React, { useState } from "react";
import {
  categoryOptions,
  Category,
  repeatOptions,
  Repeat,
  Task,
} from "../types";

const defaultColor = "#c7d2fe";

function getDurationString(start: string, end: string): string {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  let minutes = eh * 60 + em - (sh * 60 + sm);
  if (minutes < 0) minutes += 24 * 60; // 자정 넘는 경우
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hh = h.toString().padStart(2, "0");
  const mm = m.toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

const AddTask: React.FC<{
  projects: string[];
  onAdd: (task: Task) => void;
  onSave: (newProject: any) => void;
  setProjects: React.Dispatch<React.SetStateAction<any[]>>;
  setEvents: React.Dispatch<React.SetStateAction<any[]>>;
  editingprojects: string[];
  setEditingProject: React.Dispatch<React.SetStateAction<any[]>>;
}> = ({
  projects,
  onAdd,
  onSave,
  setProjects,
  setEvents,
  editingprojects,
  setEditingProject,
}) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("10:00");
  const [color, setColor] = useState(defaultColor);
  const [category, setCategory] = useState<Category>("Other");
  const [repeat, setRepeat] = useState<Repeat>("none");

  const duration = getDurationString(start, end);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, start, end, duration, color, category, repeat });
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
            flex: 2,
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
            flex: 2,
            padding: 6,
            borderRadius: 6,
            border: "1px solid #eee",
          }}
          required
        />
        <input
          type="text"
          value={duration}
          style={{
            flex: 1,
            padding: 6,
            borderRadius: 6,
            border: "1px solid #eee",
            width: 0, // 추가!
            minWidth: 0, // 추가!
          }}
          tabIndex={-1}
        />
      </div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: 40, height: 32, border: "none", background: "none" }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
      >
        {categoryOptions.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select
        value={repeat}
        onChange={(e) => setRepeat(e.target.value as Repeat)}
      >
        {repeatOptions.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
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
