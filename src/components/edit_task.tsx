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
  onDelete: (task: Task) => void;
  onClose: () => void;
}> = ({ task, onAdd, onSave, onDelete, onClose }) => {
  const [name, setName] = useState(task.name);
  const [start, setStart] = useState(task.start);
  const [end, setEnd] = useState(task.end);
  const [color, setColor] = useState(task.color);
  const [category, setCategory] = useState<Category>(task.category);
  const [repeat, setRepeat] = useState<Repeat>(task.repeat);
  const [level, setlevel] = useState<Level>(task.level);
  const [parent_name, setParentName] = useState(task.parent_name); // todo: auto fill
  let [id, setId] = useState(-1);

  const duration = getDurationString(start, end);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    onAdd({
      name,
      start,
      end,
      color,
      category,
      repeat,
      level,
      parent_name,
      id,
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#0008",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <form
        style={{
          background: "#fff",
          padding: 24,
          borderRadius: 16,
          boxShadow: "0 4px 24px #0002",
          minWidth: 320,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          onSave({
            name,
            start,
            end,
            color,
            category,
            repeat,
            level,
            parent_name,
            id,
          });
        }}
      >
        <h3 style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 }}>
          Edit Task
        </h3>
        <input
          type="text"
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
        <select
          value={level}
          onChange={(e) => setlevel(e.target.value as Level)}
        >
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
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button
            type="submit"
            style={{
              flex: 1,
              background: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 0",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              flex: 1,
              background: "#eee",
              color: "#333",
              border: "none",
              borderRadius: 6,
              padding: "8px 0",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onDelete(task)}
            style={{
              flex: 1,
              background: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 0",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
