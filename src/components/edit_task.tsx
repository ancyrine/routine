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

const EditTask: React.FC<{
  task: Task;
  onAdd: (task: Task) => void;
  onSave: (task: Task) => void;
  onClose: () => void;
}> = ({ task, onAdd, onSave, onClose }) => {
  const [name, setName] = useState(task.name);
  const [start, setStart] = useState(task.start);
  const [end, setEnd] = useState(task.end);
  const [color, setColor] = useState(task.color);
  const [category, setCategory] = useState<Category>(task.category);
  const [repeat, setRepeat] = useState<Repeat>(task.repeat);
  const [level, setlevel] = useState<Level>(task.level);
  const [parent_name, setParentName] = useState(task.parent_name); // todo: auto fill

  const duration = getDurationString(start, end);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    onAdd({ name, start, end, color, category, repeat, level, parent_name });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#0008",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 220,
      }}
    >
      <div style={{ background: "#fff", padding: 24, borderRadius: 8 }}>
        <h3>Edit Task</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #eee" }}
          required
        />
      </div>
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
        Edit
      </button>{" "}
      <button onClick={() => onSave(task)}>Save</button>
      <button onClick={onClose} style={{ marginLeft: 8 }}>
        Cancel
      </button>
    </form>
  );
};

export default EditTask;
