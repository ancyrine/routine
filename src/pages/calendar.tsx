import React, { useState } from "react";
import Calendar from "../components/calendar";
import Daily from "../components/daily_view";
import AddTask from "../components/add_task";
import Projects from "../components/projects";
import EditProjectModal from "../components/edit_project";
import { Event } from "../types";

const initialEvents: Event[] = [
  {
    title: "🌅 Morning Routine",
    start: "07:00",
    end: "08:30",
    color: "#f5e6c8",
  },
  {
    title: "💻 Work",
    start: "09:00",
    end: "16:00",
    color: "#dbeafe",
  },
];

const initialProjects: string[] = ["Personal", "Work", "Home"];

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [projects, setProjects] = useState<string[]>(initialProjects);
  const [editingprojects, setEditingProject] = useState<string | null>(null);

  const handleAddTask = (task: Event) => {
    setEvents([...events, task]);
  };

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
      <Calendar />
      <Daily events={events} />
      <AddTask
        onAdd={handleAddTask}
        projects={projects}
        onSave={function (newProject: any): void {
          throw new Error("Function not implemented.");
        }}
        setProjects={function (value: React.SetStateAction<any[]>): void {
          throw new Error("Function not implemented.");
        }}
        setEvents={function (value: React.SetStateAction<any[]>): void {
          throw new Error("Function not implemented.");
        }}
        editingprojects={[]}
        setEditingProject={function (value: React.SetStateAction<any[]>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Projects projects={projects} onEdit={setEditingProject} />
      {editingprojects && (
        <EditProjectModal
          projectName={editingprojects}
          onSave={(newName) => {
            setProjects(
              projects.map((p) => (p === editingprojects ? newName : p))
            );
            setEditingProject(null);
          }}
          onClose={() => setEditingProject(null)}
        />
      )}
    </div>
  );
};

export default CalendarPage;
