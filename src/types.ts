export const categoryOptions = ["Life", "Work", "ETC", "Other"];
export type Category = (typeof categoryOptions)[number];
export const repeatOptions = ["none", "daily", "weekly"];
export type Repeat = (typeof repeatOptions)[number];

export type Task = {
  title: string;
  start: string;
  end: string;
  duration: string;
  color: string;
  category: Category;
  repeat: Repeat;
};

export type Event = {
  title: string;
  start: string;
  end: string;
  color: string;
};

export type CalendarDayProps = {
  day: number | null;
  progress?: number[];
};
