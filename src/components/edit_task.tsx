import React, { useState } from "react";
import { Task } from "../types";

const EditTask: React.FC<{
  task: Task;
  onSave: (task: Task) => void;
  onClose: () => void;
}> = ({ task, onSave, onClose }) => {
  const [tasks, setTasks] = useState<Task>(task);

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
      }}
    >
      <div style={{ background: "#fff", padding: 24, borderRadius: 8 }}>
        <h3>Edit Task</h3>
        <input
          value={tasks.name}
          onChange={(e) => setTasks({ ...task, name: e.target.value })}
        />
        <div style={{ marginTop: 12 }}>
          <button onClick={() => onSave(tasks)}>Save</button>
          <button onClick={onClose} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
