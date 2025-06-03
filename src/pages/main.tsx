import React, { useState } from "react";
import Projects from "../components/projects";
import AddTask from "../components/add_task";
import Daily from "../components/daily_view";
import EditTask from "../components/edit_task";
import { Task, Category, categoryOptions, initialTasks } from "../types";

const MainPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [edittask, setEditTask] = useState<Task | null>(null);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, { ...task }]);
  };

  // task(project/task) 수정
  const handleSaveTask = (updated: Task) => {
    setTasks(tasks.map((t) => (t.name === updated.name ? updated : t)));
    setEditTask(null);
  };

  // 분리
  const tasks_1 = tasks.filter((t) => t.level === "1");
  const tasks_2 = tasks.filter((t) => t.level === "2");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 24,
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#f6f6f6",
        minHeight: "100vh",
        padding: 24,
      }}
    >
      <Projects tasks_1={tasks_1} tasks_2={tasks_2} onEdit={setEditTask} />
      <Daily tasks={tasks_2} />
      <AddTask
        tasks={tasks}
        editingtasks={tasks}
        onAdd={handleAddTask}
        onSave={handleSaveTask}
      />
      {edittask && (
        <EditTask
          task={edittask}
          onAdd={handleAddTask}
          onSave={handleSaveTask}
          onClose={() => setEditTask(null)}
        />
      )}
    </div>
  );
};

export default MainPage;
