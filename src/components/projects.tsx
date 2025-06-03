import React from "react";
import { Task } from "../types";

type ProjectsProps = {
  tasks_1: Task[];
  tasks_2: Task[];
  onEdit: (task: Task) => void;
};

const Projects: React.FC<ProjectsProps> = ({ tasks_1, tasks_2, onEdit }) => (
  <div className="bg-white rounded-xl shadow p-6 w-72">
    <h3 className="text-xl font-bold mb-4">Projects</h3>
    <div className="space-y-5">
      {tasks_1.map((task_1) => (
        <div
          key={task_1.name}
          className="border rounded-lg p-3 hover:shadow cursor-pointer"
          onClick={() => onEdit(task_1)}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-base font-semibold">{task_1.name}</span>
            <span
              className="w-4 h-4 rounded-full"
              style={{ background: task_1.color, display: "inline-block" }}
            />
          </div>
          <div className="text-xs text-gray-500 mb-1">{task_1.category}</div>
          <ul className="pl-2 text-xs text-gray-700">
            {tasks_2
              .filter((task_2) => task_2.category === task_1.category)
              .map((task_2, idx) => (
                <li key={idx} className="truncate">
                  {task_2.name}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
