import React from "react";

const Projects: React.FC<{
  projects: string[];
  onEdit: (name: string) => void;
}> = ({ projects, onEdit }) => (
  <div>
    <h3>Projects</h3>
    <ul>
      {projects.map((project) => (
        <li
          key={project}
          onClick={() => onEdit(project)}
          style={{ cursor: "pointer" }}
        >
          {project}
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
