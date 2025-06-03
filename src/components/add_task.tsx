import React, { useState } from "react";
import {
  categoryOptions,
  Category,
  repeatOptions,
  Repeat,
  levelOptions,
  Level,
  Task,
  getDurationString,
} from "../types";

const defaultColor = "#c7d2fe";

const AddTask: React.FC<{
  tasks: Task[]; //Todo : do i need list of tasks?
  editingtasks: Task[];
  onAdd: (task: Task) => void;
  onSave: (newProject: any) => void;
  // setProjects: React.Dispatch<React.SetStateAction<any[]>>;
  // setTasks: React.Dispatch<React.SetStateAction<any[]>>;
}> = ({ tasks, editingtasks, onAdd, onSave }) => {
  const [name, setName] = useState("");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("10:00");
  const [color, setColor] = useState(defaultColor);
  const [category, setCategory] = useState<Category>("Other");
  const [repeat, setRepeat] = useState<Repeat>("none");
  const [level, setlevel] = useState<Level>("1");
  const [parent_name, setParentName] = useState(""); // todo: auto fill

  const duration = getDurationString(start, end);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    onAdd({ name, start, end, color, category, repeat, level, parent_name });
    setName("");
    setStart("09:00");
    setEnd("10:00");
    setColor(defaultColor);
    setParentName("");
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <select value={level} onChange={(e) => setlevel(e.target.value as Level)}>
        {levelOptions.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Parent name"
        value={parent_name}
        onChange={(e) => setParentName(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #eee" }}
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
