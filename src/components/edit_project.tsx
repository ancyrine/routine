import React, { useState } from "react";

const EditProjectModal: React.FC<{
  projectName: string;
  onSave: (newName: string) => void;
  onClose: () => void;
}> = ({ projectName, onSave, onClose }) => {
  const [name, setName] = useState(projectName);

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
        <h3>Edit Project</h3>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div style={{ marginTop: 12 }}>
          <button onClick={() => onSave(name)}>Save</button>
          <button onClick={onClose} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModal;
