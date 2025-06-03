export const categoryOptions = ["Life", "Work", "Other"];
export const repeatOptions = ["none", "daily", "weekly"];
export const levelOptions = ["1", "2"];

export type Category = (typeof categoryOptions)[number];
export type Repeat = (typeof repeatOptions)[number];
export type Level = (typeof levelOptions)[number];

export type Task = {
  name: string;
  start: string;
  end: string;
  color: string;
  category: Category;
  repeat: Repeat;
  level: Level;
  parent_name: string;
};

export type CalendarDayProps = {
  day: number | null;
  progress?: number[];
};

export function getDurationString(start: string, end: string): string {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  let minutes = eh * 60 + em - (sh * 60 + sm);
  if (minutes < 0) minutes += 24 * 60; // 자정 넘는 경우
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hh = h.toString().padStart(2, "0");
  const mm = m.toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

// Reference
export const initialTasks: Task[] = [
  {
    name: "Morning Routine",
    start: "07:00",
    end: "08:30",
    color: "#f5e6c8",
    category: "Life",
    repeat: "none",
    level: "1",
    parent_name: "",
  },
  {
    name: "drink tea",
    start: "07:00",
    end: "08:30",
    color: "#60a5fa",
    category: "Life",
    repeat: "none",
    level: "2",
    parent_name: "Morning Routine",
  },
  {
    name: "Work",
    start: "09:00",
    end: "16:00",
    color: "#dbeafe",
    category: "work",
    repeat: "none",
    level: "1",
    parent_name: "",
  },
];
