import React from "react";

const projects = [
  {
    name: "Personal",
    items: ["Exercise", "Reading", "Journaling"],
  },
  {
    name: "Work",
    items: ["Learn Spanish", "Home"],
  },
  {
    name: "Home",
    items: ["Fix Sink", "Organize Garage"],
  },
];

const Projects: React.FC = () => (
  <div
    style={{
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 8px #0001",
      padding: 16,
      minWidth: 180,
      margin: "16px auto",
    }}
  >
    <h3 style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
      Projects
    </h3>
    {projects.map((proj, idx) => (
      <div key={idx} style={{ marginBottom: 8 }}>
        <div style={{ fontWeight: "bold", color: "#6366f1" }}>{proj.name}</div>
        <ul style={{ margin: 0, paddingLeft: 16 }}>
          {proj.items.map((item, i) => (
            <li key={i} style={{ fontSize: 14, color: "#444" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Projects;
