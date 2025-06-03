import React from "react";
import { CalendarDayProps } from "../types";

const weekdays = ["A", "B", "T", "W", "T", "F", "S"]; // 요일 라벨

const CalendarHeader = () => (
  <div>
    <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Calendar</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <span style={{ fontSize: "16px" }}>April 2024</span>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        textAlign: "center",
        color: "#888",
      }}
    >
      {weekdays.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  </div>
);

const ringColors = ["#ef4444", "#facc15", "#3b82f6"]; // health, work, life

const CalendarDay: React.FC<CalendarDayProps> = ({ day, progress }) => {
  if (day === null) return <div style={{ width: 40, height: 40 }} />; // 빈 칸

  return (
    <div
      style={{
        position: "relative",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 링 3개 */}
      {ringColors.map((color, idx) => {
        const size = 38 - idx * 6;
        const radius = 16 - idx * 2;
        const dashArray = 2 * Math.PI * radius;
        const dashOffset = dashArray * (1 - (progress?.[idx] ?? 0));
        return (
          <svg
            key={idx}
            width={size}
            height={size}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10 - idx,
            }}
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={2}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
            />
          </svg>
        );
      })}
      {/* 날짜 숫자 */}
      <div
        style={{
          zIndex: 20,
          width: 24,
          height: 24,
          background: "#fff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "#333",
          boxShadow: "0 1px 2px #0001",
        }}
      >
        {day}
      </div>
    </div>
  );
};

// 7개씩 끊어서 2차원 배열로 만드는 함수
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const Calendar = () => {
  const totalDays = 30;
  const startWeekday = 2; // 0: A, 1: B, 2: T(화요일 시작)

  // 날짜별 진행률 예시
  const mockProgress: Record<number, number[]> = {
    1: [0.9, 0.6, 0.8],
    2: [0.7, 0.5, 0.4],
    3: [0.8, 0.8, 0.7],
    4: [0.6, 0.9, 0.5],
    5: [0.5, 0.4, 0.9],
  };

  // 달력에 들어갈 날짜 배열 (빈칸 포함)
  const daysArray: (number | null)[] = [
    ...Array(startWeekday).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  // 7개씩 끊어서 행(row)으로 만듦
  const weekRows = chunkArray(daysArray, 7);

  return (
    <div style={{ padding: 16, maxWidth: 320, margin: "0 auto" }}>
      <CalendarHeader />
      <div>
        {weekRows.map((week, rowIdx) => (
          <div
            key={rowIdx}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 4,
              marginBottom: 4,
            }}
          >
            {week.map((day, i) => (
              <CalendarDay
                key={i}
                day={day}
                progress={
                  typeof day === "number" ? mockProgress[day] : undefined
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
